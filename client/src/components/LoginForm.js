import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate(); // initialize the useNavigate hook
  const session = localStorage.getItem("sessionToken");
  useEffect(() => {
    if (session === "myToken") {
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
    <div className="  ">
      {localStorage.getItem("sessionToken") ? (
        <div>
          
          <button
            onClick={handleLogout}
            className=""
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex my-24 ">
           <img alt="Anime girl" src="./images/ladki.png" className=" w-[480px] h-[600px] ml-24 "></img>
        <form className=" px-36   my-32 " onSubmit={handleSubmit}>
          <h1 className=" font-extrabold text-3xl ml-[130px] text-red-500  ">WELCOME to KISSANIME </h1>
          <div className="px-28 pt-10">
            <label htmlFor="email" className="text-red-300 my-8 mr-5 focus:outline-none ">
              Users name or Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" py-1 text-left w-96 px-4  mt-1 border-b-4 border-red-200 rounded-xl focus:ring-red-400"
              required
            />
          </div>
          <div className="text-red-300 my-3 mx-28  ">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" py-1 text-left w-96 px-4  mt-1 border-b-4 border-red-200 rounded-xl focus:ring-red-400"
            />
         
          </div>
          <button
            type="submit"
            className="py-2 text-center text-white w-40 px-2 ml-56 mt-1 border-2 border-red-200 rounded-xl focus:ring-red-400"
          >
            Submit
          </button>
        </form>
        </div>
      
      )}
      {!isValid && localStorage.getItem("sessionToken") && (
        <p className="text-red-500 mt-4">Invalid email or password.</p>
      )}
    </div>
  );
}

export default LoginForm;