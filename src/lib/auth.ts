export function isAuthenticated() {
  if (typeof window === "undefined") return false
  return localStorage.getItem("isLoggedIn") === "true"
}

export function isFitnessConnected() {
  if (typeof window === "undefined") return false
  return localStorage.getItem("fitnessConnected") === "true"
}

export function logout() {
  if (typeof window === "undefined") return
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("fitnessConnected")
}
