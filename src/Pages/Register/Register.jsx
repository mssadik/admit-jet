import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const naviget = useNavigate()

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const university = form.university.value;
        const address = form.address.value;
        createUser(email, password)
            .then(() => {
                const savedUser = {name, email, university, address}
                fetch('https://admit-jet-server.vercel.app/user',{
                    method: "POST",
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            setSuccess("Account Created Successfully")
                            
                            setError(" ")
                            naviget('/')
                        }
                    })

            })
            .catch((e) => {
                setSuccess('')
                setError(e.message);
            })

        console.log(name, email, password, university, address);
    }
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover"
            style={{ backgroundImage: "url('https://i.ibb.co/m8CJbrv/f1.jpg')" }}
        >
            <div className="bg-white shadow-md rounded-md px-8 py-6 sm:w-96">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handelRegister} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Your email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Your password"
                        />
                    </div>
                    <div>
                        <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                            University
                        </label>
                        <input
                            type="text"
                            name="university"
                            id="university"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Your university"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Your address"
                        />
                    </div>
                    <div>
                        <p className="text-xs text-green-500 mb-2">{success}</p>
                        <p className="text-red-600 text-xs mb-2">{error}</p>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="flex justify-between mt-4">
                    <p>Do not have an account <Link className="underline" to="/login">Login</Link></p><br />


                </div>
            </div>
        </div>
    );
};

export default Register;
