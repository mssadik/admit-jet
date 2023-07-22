import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signUser, googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const naviget = useNavigate()

    const handelLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signUser(email, password)
        .then(() =>{
            setSuccess("User login Successfully")
            setError('')
            naviget('/')
        })
        .catch((e) => {
            setSuccess("")
            setError(e.message);
        })
        console.log( email, password);
    }

    const handelGoogleLogin = () =>{
        googleSignIn()
        .then(() =>{
            naviget('/')
        })
        .then(() =>{})
    }

    

    return (
        <div  style={{ backgroundImage: "url('https://i.ibb.co/2j9jmfC/f2.jpg')" }}>
            {/* <p className="text-2xl mx-40 py-20  bg-stone-600 pt-5 opacity-50 rounded-lg text-white">Study is the key that unlocks the door to knowledge and empowers us to explore,  the boundless realms of understanding,  propelling us towards our aspirations with an unwavering determination</p> */}
            <div className="min-h-screen  md:flex gap-10 items-center justify-center">
                <div className="">
                    <button className="bg-black w-80 flex items-center justify-center p-4 rounded-lg">
                        
                            <FaGoogle size={24} />
                         <span className="text-2xl ml-2 font-medium text-white font-serif">Continue with Github</span>
                    </button>
                    <button onClick={handelGoogleLogin} className="bg-blue-900 w-80 flex items-center justify-center p-4 rounded-lg mt-3">
                        
                            <FaGithub size={24} />
                        <span className="text-2xl ml-5 font-medium text-white font-serif">Continue with google</span>
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-md px-8 py-6 sm:w-96">
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handelLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
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
                                id="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                placeholder="Your password"
                            />
                        </div>
                        <div>
                        <p className="text-xs text-red-600">{error}</p>
                        <p className="text-xs text-green-500 mb-2">{success}</p>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Log In
                            </button>
                            
                            <button className="btn-link">Reset Password</button>
                            <p>Do not have account <Link className="underline" to="/register">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
