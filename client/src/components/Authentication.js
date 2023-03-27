import React, { useState } from "react";

function Authentication() {
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
        <div className="max-w-lg rounded-md mx-auto mt-8 border border-gray-300 shadow-md p-6">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="imgSource"
                        className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Image Source"
                        value={imgSource}
                        onChange={(e) => setImgSource(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                    >
                        SighUp
                    </button>
                </div>
            </form>
            <a href="/login">Already a user? Login</a>
        </div>
    );
}

export default Authentication;
