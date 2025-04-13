"use client"
import { useEffect, useState } from "react";
import { format, addDays, isAfter } from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function FitnessVisualizer() {
  const [startDate, setStartDate] = useState(() => format(new Date(Date.now() - 7 * 86400000), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(() => format(new Date(), "yyyy-MM-dd"));
  const [dataType, setDataType] = useState("steps");
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setDailyData([]);

    const tokenRes = await fetch("/api/auth/user/accesstoken", { method: "POST" });
    const { accessToken } = await tokenRes.json();

    let curDate = new Date(startDate);
    const end = new Date(endDate);
    const tempData: any[] = [];

    while (!isAfter(curDate, end)) {
      const nextDate = addDays(curDate, 1);

      const res = await fetch("/api/fitness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          dataType,
          startdate: curDate,
          enddate: nextDate,
        }),
      });

      const json = await res.json();

      if (res.ok && json.bucket?.length) {
        const bucket = json.bucket[0]; // only one bucket per call
        let value = 0;
        bucket.dataset?.forEach((ds: any) => {
          ds.point?.forEach((point: any) => {
            const v = point.value?.[0];
            if (v?.intVal) value += v.intVal;
            else if (v?.fpVal) value += v.fpVal;
          });
        });

        tempData.push({ date: format(curDate, "yyyy-MM-dd"), value });
      } else {
        tempData.push({ date: format(curDate, "yyyy-MM-dd"), value: 0 });
      }

      curDate = nextDate;
    }

    setDailyData(tempData);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Fitness Visualizer</h1>

      <div className="flex flex-wrap items-center gap-4">
        <label>
          Start:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="ml-2 border rounded px-2" />
        </label>
        <label>
          End:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="ml-2 border rounded px-2" />
        </label>
        <select value={dataType} onChange={(e) => setDataType(e.target.value)} className="border rounded px-2">
          <option value="steps">Steps</option>
          <option value="heart_rate">Heart Rate</option>
          <option value="sleep">Sleep</option>
          <option value="blood_glucose">Blood Glucose</option>
          <option value="blood_pressure">Blood Pressure</option>
          <option value="location">Location</option>
          <option value="body">Body</option>
          <option value="body_temperature">Body Temperature</option>
        </select>

        <button
          onClick={fetchData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load"}
        </button>
      </div>

      <div className="mt-8">
        {dailyData.length === 0 && !loading ? (
          <p className="text-gray-500">No data record found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="border rounded p-4 shadow">
                <h2 className="font-semibold mb-2">{dataType} {idx + 1}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
