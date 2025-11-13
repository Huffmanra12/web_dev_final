export async function authUser({ email, password }) {
  try {
    console.log(email);
    const res = await fetch(
      "http://192.168.1.239:8080/api/v1/users/authenticate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || "Authentication failed");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error authenticating:", err);
    throw err;
  }
}

export async function refreshSession() {
  const res = await fetch("http://192.168.1.239:8080/api/v1/users/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

export async function getCurrentUser(accessToken) {
  const res = await fetch("http://192.168.1.239:8080/api/v1/users/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  if (!res.ok) throw new Error("Invalid or expired access token");
  return res.json();
}
