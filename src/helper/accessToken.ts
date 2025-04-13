export async function getAccessTokenFromRefreshToken(refreshToken: string) {
    const clientId = process.env.GOOGLE_CLIENT_ID!
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET!
  
    const params = new URLSearchParams()
    params.append("client_id", clientId)
    params.append("client_secret", clientSecret)
    params.append("refresh_token", refreshToken)
    params.append("grant_type", "refresh_token")
  
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
  
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error(data.error || "Failed to get access token")
    }
  
    return data.access_token as string
  }