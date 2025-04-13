"use client"
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Fitness() {
  const [startDate, setStartDate] = useState(() =>
    format(new Date(Date.now() - 7 * 86400000), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState(() =>
    format(new Date(), "yyyy-MM-dd")
  );
  const [dataType, setDataType] = useState("steps");
  const [data, setData] = useState("");

  async function fetchData() {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const tokenRes = await fetch("/api/auth/user/accesstoken", { method: "POST" });
    const { accessToken } = await tokenRes.json();

    const fitnessRes = await fetch("/api/fitness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        accessToken,
        dataType: dataType,
        startdate: start,
        enddate: end,
      }),
    });

    const json = await fitnessRes.json();
    if (!fitnessRes.ok) {
      console.log("error");
      return;
    }
    setData(json);
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Fitness Visualizer</h1>

      <div className="flex items-center gap-4 flex-wrap">
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

        <select
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          className="ml-2 border rounded px-2"
        >
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
        >
          Load
        </button>
      </div>

      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
