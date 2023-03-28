import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate(); // initialize the useNavigate hook
  const session = localStorage.getItem("sessionToken");
  useEffect(() => {
    if (session == "myToken") {
      navigate('/home');
      console.log("MKC navigate nahi hua");
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/user/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setIsValid(data.message === "true");
    if (data.message === "true") {
      console.log(data);
      localStorage.setItem("sessionToken", "myToken");
      localStorage.setItem("id", data._id);
      navigate("/home"); // redirect to "/home" on successful login
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {localStorage.getItem("sessionToken") ? (
        <div>
          <p>You are logged in!</p>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <form className="bg-white rounded-lg shadow-md p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      )}
      {!isValid && localStorage.getItem("sessionToken") && (
        <p className="text-red-500 mt-4">Invalid email or password.</p>
      )}
    </div>
  );
}

export default LoginForm;
