import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-[#1e3a8a] p-5 shadow-lg flex items-center justify-between px-10 rounded-b-lg">
            {/* Logo and Title Container */}
            <div className="flex items-center space-x-4">
                <img src="images.png" alt="Logo" className="h-12 w-12 object-contain" />
                <span className="text-white text-xl font-bold">My App</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
                <Link
                    to="/"
                    className="text-white font-semibold text-lg px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-[#4ade80] hover:text-black hover:scale-105 hover:shadow-xl"
                >
                    Home
                </Link>
                <Link
                    to="/Todos"
                    className="text-white font-semibold text-lg px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-[#4ade80] hover:text-black hover:scale-105 hover:shadow-xl"
                >
                    All Todos
                </Link>
                <Link
                    to="/Memes"
                    className="text-white font-semibold text-lg px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-[#4ade80] hover:text-black hover:scale-105 hover:shadow-xl"
                >
                    All Memes
                </Link>
            </div>
        </nav>
    );
}
