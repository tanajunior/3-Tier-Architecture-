import React, { useEffect, useState } from "react";

// IMPORTANT: if the frontend runs on the FRONTEND VM, use the BACKEND VM's PRIVATE IP and port 5000.
const API_URL = "http://10.0.1.2:5000/users"; // <-- replace if your backend IP differs

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

useEffect(() => {
  fetch(API_URL)
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status} - ${await res.text()}`);
      return res.json();
    })
    .then((data) => {
      console.log("Data:", data); // Debug
      setUsers(data); // Use data directly
    })
    .catch((err) => {
      console.error("Error:", err); // Debug
      setError(err.message);
    });
}, []);
  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1>USERS</h1>

      {error && (
        <div style={{ marginBottom: 12, padding: 8, border: "1px solid #ccc" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
          {users.length === 0 && !error && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No data yet…</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

