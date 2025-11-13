const createUser = async (first_name, last_name, username, email, password) => {
  const res = await fetch("http://192.168.1.239:8080/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password,
    }),
  });
};

export default createUser;
