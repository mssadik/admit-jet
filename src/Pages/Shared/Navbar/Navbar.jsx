import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="md:text-2xl hidden md:block py-2 px-4 text-white font-semibold">
                    <a href="/" className=""> Admit Jet </a>
                </div>
                <div className={` navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="home">Home</Link>
                    <Link to="/college" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="/college">College</Link>
                    <Link to="/admission" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="/admission">Admission</Link>
                    <Link to="/myCollege" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="/myCollege">My_College</Link>
                    <Link to="/login" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="/myCollege">Login</Link>
                    <Link to="/register" className="block mt-2 text-sm font-medium text-gray-600 hover:text-blue-600 md:inline-block md:mt-0 hover:underline" href="/myCollege">Register</Link>
                </div>
                <div className="navbar-search flex">
                    <input
                        type="text"
                        placeholder="Search College"
                        className="px-4 py-2 mr-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded-lg flex-grow"
                    />
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">
                        Search
                    </button>
                </div>

                <div className="navbar-mobile-toggle md:hidden " onClick={toggleMobileMenu}>
                    {/* You can use a hamburger icon here */}
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
