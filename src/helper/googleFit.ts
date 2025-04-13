
export async function fetchGoogleFitData(
  dataTypeName: string | string[],
  token: string,
  startdate: Date,
  enddate: Date
) {
  const startTimeMillis = startdate.getTime()
  const endTimeMillis = enddate.getTime()

  const aggregateBy = Array.isArray(dataTypeName)
    ? dataTypeName.map((name) => ({ dataTypeName: name }))
    : [{ dataTypeName }]

  const body = {
    aggregateBy,
    bucketByTime: { durationMillis: endTimeMillis - startTimeMillis },
    startTimeMillis,
    endTimeMillis,
  }

  const res = await fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`Google Fit API error: ${errorText}`)
  }

  return res.json()
}