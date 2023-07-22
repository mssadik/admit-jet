import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    return (
        <div  style={{ backgroundImage: "url('https://i.ibb.co/2j9jmfC/f2.jpg')" }}>
            {/* <p className="text-2xl mx-40 py-20  bg-stone-600 pt-5 opacity-50 rounded-lg text-white">Study is the key that unlocks the door to knowledge and empowers us to explore,  the boundless realms of understanding,  propelling us towards our aspirations with an unwavering determination</p> */}
            <div className="min-h-screen  md:flex gap-10 items-center justify-center">
                <div className="">
                    <button className="bg-black w-80 flex items-center justify-center p-4 rounded-lg">
                        <a
                            href="YOUR_GOOGLE_AUTH_URL"
                            className="text-indigo-500 hover:text-indigo-700 mr-4"
                            title="Login with Google"
                        >
                            <FaGoogle size={24} />
                        </a> <span className="text-2xl font-medium text-white font-serif">Countinu with google</span>
                    </button>
                    <button className="bg-blue-900 w-80 flex items-center justify-center p-4 rounded-lg mt-3">
                        <a
                            href="YOUR_GITHUB_AUTH_URL"
                            className="text-indigo-500 hover:text-indigo-700"
                            title="Login with GitHub"
                        >
                            <FaGithub size={24} />
                        </a>  <span className="text-2xl ml-5 font-medium text-white font-serif">Countinu with google</span>
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-md px-8 py-6 sm:w-96">
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                    <form className="space-y-4">
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
