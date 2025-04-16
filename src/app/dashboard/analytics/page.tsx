/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const MAX_DAYS = 30;

export default function FitnessVisualizer() {
  const [startDate, setStartDate] = useState(() => format(new Date(Date.now() - 7 * 86400000), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(() => format(new Date(), "yyyy-MM-dd"));
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setError(null);
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays > MAX_DAYS) {
      setError(`Maximum allowed range is ${MAX_DAYS} days`);
      setData([]);
      return;
    }

    try {
      const tokenRes = await fetch("/api/auth/user/accesstoken", { method: "POST" });
      const { accessToken } = await tokenRes.json();

      const fitnessRes = await fetch("/api/fitness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          dataType: "activity",
          startdate: start,
          enddate: end,
        }),
      });

      const json = await fitnessRes.json();
      const points = json?.bucket?.flatMap((bucket: any) =>
        bucket.dataset.flatMap((ds: any) => ds.point)
      );
      setData(points || []);
    } catch (err) {
      console.error("Error loading data", err);
      setError("Failed to load activity data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const activityMap: Record<number, string> = {
    0: "In Vehicle",
    1: "Biking",
    2: "On Foot",
    7: "Walking",
    8: "Running",
    3: "Still",
    4: "Unknown",
  };

  const chartData = {
    labels: data.map((pt) =>
      new Date(Number(pt.startTimeNanos) / 1e6).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Duration (min)",
        data: data.map((pt) => Math.round((pt.value?.[1]?.intVal || 0) / 60000)),
        borderColor: "#2563eb",
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: data.map(
      (pt) => activityMap[pt.value?.[0]?.intVal] || `Type ${pt.value?.[0]?.intVal}`
    ),
    datasets: [
      {
        label: "Activity Types",
        data: data.map((pt) => pt.value?.[1]?.intVal || 0),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#14b8a6",
        ],
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Activity Visualizer</h1>

      <div className="flex items-center gap-4">
        <label>
          Start:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="ml-2 border rounded px-2"
          />
        </label>
        <label>
          End:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="ml-2 border rounded px-2"
          />
        </label>
        <button
          onClick={fetchData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Load
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {data.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold mb-2">Activity Duration</h2>
              <Line data={chartData} />
            </div>
            <div>
              <h2 className="font-semibold mb-2">Activity Type Breakdown</h2>
              <Pie data={pieData} />
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Activity</th>
                  <th className="border px-4 py-2">Start</th>
                  <th className="border px-4 py-2">End</th>
                  <th className="border px-4 py-2">Duration (min)</th>
                  <th className="border px-4 py-2">Steps</th>
                </tr>
              </thead>
              <tbody>
                {data.map((pt, idx) => {
                  const activity = activityMap[pt.value?.[0]?.intVal] || pt.value?.[0]?.intVal;
                  const duration = Math.round((pt.value?.[1]?.intVal || 0) / 60000);
                  const steps = pt.value?.[2]?.intVal || 0;
                  const start = new Date(Number(pt.startTimeNanos) / 1e6).toLocaleString();
                  const end = new Date(Number(pt.endTimeNanos) / 1e6).toLocaleString();
                  return (
                    <tr key={idx}>
                      <td className="border px-4 py-2">{activity}</td>
                      <td className="border px-4 py-2">{start}</td>
                      <td className="border px-4 py-2">{end}</td>
                      <td className="border px-4 py-2">{duration}</td>
                      <td className="border px-4 py-2">{steps}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
