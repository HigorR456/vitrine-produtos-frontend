import { cookies } from "next/headers"

export async function getUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value

  if (!token) return null
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${apiUrl}/user/me`, {
    headers: {
    Cookie: `access_token=${token}`,
  },
    credentials: 'include'
  });

  if (!response.ok) {
    return null
  }

  return await response.json()
}
