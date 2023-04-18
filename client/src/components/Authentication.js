import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Authentication() {
    const session = localStorage.getItem("sessionToken");
    const navigate = useNavigate();
    useEffect(() => {
        if (session == "myToken") {
            navigate('/home');
            console.log("MKC navigate nahi hua");
        }
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgSource, setImgSource] = useState("");

    async function addUser(name, email, password, imgSource) {
        const user = { name, email, password, imgSource };
        try {
            const response = await fetch("http://localhost:3001/api/user/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(`Saved user: ${data.message}`);
        } catch (err) {
            console.error(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(name, email, password, imgSource);
        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
        setImgSource("");
    };

    return (
        <div>
        <div className="flex ">
            <img src="./images/soch.png" className="w-92 h-[400px] mt-32 ml-36"></img>
        <div className=" bg-black mt-60 ml-92  my-32">
       
            
           
            
            <form onSubmit={handleSubmit} className=" ">
                <div className="   ml-96 ">
                    <input                         
                        type="text"
                        id="name"
                        className="w-96 py-3 rounded-lg px-6 "
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="  ml-96 pt-2 ">
                    <input
                        type="email"
                        id="email"
                        className="w-96 py-3 rounded-lg px-6 "
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=" ml-96 pt-2 ">
                    <input
                        type="password"
                        id="password"
                        className="w-96 py-3 rounded-lg px-6 "
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="  ml-96 pt-2">
                    <input
                        type="text"
                        id="imgSource"
                        className="w-96 py-3 rounded-lg px-6 "
                        placeholder="Image Source"
                        value={imgSource}
                        onChange={(e) => setImgSource(e.target.value)}
                    />
                </div>
                <div className="pt-4 ml-28 rounded-lg">
                    <button 
                        type="submit"
                        className="bg-indigo-500 text-white ml-96 w-40 py-1 rounded-lg hover:bg-indigo-600"
                    >
                        SighUp
                    </button>
                </div>
            </form>
            <a href="/login">Already a user? Login</a>
            
        </div>
    
        </div>
        
        <div className="">
      <p className="text-center text-white text-2xl pt-3 font-serif">“If you don't take risks, you can't create a future!”</p>
        </div>
        </div>
    );
}

export default Authentication;