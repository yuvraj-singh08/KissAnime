import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './css/SignUp.css'


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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/add`, {
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
            <div className="signup-container">
                <img src="./images/soch.png" className="image child"></img>




                <form onSubmit={handleSubmit} className="form child">
                    <h1 class="heading">Sign Up</h1>

                    <input
                        type="text"
                        id="name"
                        className="form-action textfield"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        id="email"
                        className="form-action textfield "
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        className="form-action textfield"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        id="imgSource"
                        className="form-action textfield"
                        placeholder="Image Source"
                        value={imgSource}
                        onChange={(e) => setImgSource(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="form-action button "
                    >
                        SighUp
                    </button>
                    <a className="form-action link" href="/login">Already a user? Login</a>
                </form>



            </div>

            <div className="">
                <p className="text-center text-white text-2xl pt-3 font-serif">“If you don't take risks, you can't create a future!”</p>
            </div>
        </div>
    );
}

export default Authentication;