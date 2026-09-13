import { useEffect, useState } from "react";

function BackendTest() {
  const [msg, setMsg] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMsg(data))
      .catch(() => setMsg("Server connection failed"));
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Backend Test</h1>
      <p className="mt-4">{msg}</p>
    </div>
  );
}

export default BackendTest;