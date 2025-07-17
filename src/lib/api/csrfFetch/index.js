let csrfToken = null;

async function getCsrfToken() {
  if (csrfToken) return csrfToken;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/csrf-token`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch CSRF token');
  }

  const data = await res.json();
  csrfToken = data.csrfToken;

  return csrfToken;
}

export async function csrfFetch(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();

  const isSafeMethod = ['GET', 'HEAD', 'OPTIONS'].includes(method);
  const headers = {
    ...(options.headers || {}),
    'Content-Type': 'application/json',
  };

  if (!isSafeMethod) {
    const token = await getCsrfToken();
    headers['X-CSRF-Token'] = token;
  }

  return await fetch(url, {
    ...options,
    credentials: 'include',
    headers,
  });
}
