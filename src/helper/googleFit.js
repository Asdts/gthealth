// utils/googleFit.js
export async function fetchGoogleFitData(dataTypeName, token , startdate , enddate) {

    const start = startdate.getTime();
    const end = enddate.getTime();
  
    const body = {
      aggregateBy: [{ dataTypeName }],
      bucketByTime: { durationMillis: end - start },
      startTimeMillis: start,
      endTimeMillis: end,
    };
  
    const res = await fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Google Fit API error: ${error}`);
    }
  
    return res.json();
  }
  