"use client"
import { csrfFetch } from "../csrfFetch";

export async function registerUser({ email, password, confirmPassword }) {
  if (!email || password.length < 6 || password !== confirmPassword) {
    throw new Error('Email and password are required.');
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await csrfFetch(`${apiUrl}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  return await response.json();
}
