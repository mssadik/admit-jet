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
                <div className="md:text-2xl hidden md:block">
                    Admit Jet
                </div>
                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="home">Home</a>
                    <a href="/college">College</a>
                    <a href="/admission">Admission</a>
                    <a href="/myCollege">My College</a>
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
