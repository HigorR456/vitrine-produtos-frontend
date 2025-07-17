"use client"
import { csrfFetch } from "../csrfFetch";

export async function loginUser({ email, password }) {
  if (!email || password.length < 6) {
    throw new Error('Email and password are required.');
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await csrfFetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return await response.json();
}
