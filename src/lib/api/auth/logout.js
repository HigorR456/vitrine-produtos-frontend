import { csrfFetch } from "../csrfFetch"

export async function logout() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const response = await csrfFetch(`${apiUrl}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  });

  if (!response.ok) {
    return null
  }

  return await response.json()
}
