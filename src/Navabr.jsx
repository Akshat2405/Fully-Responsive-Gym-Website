import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">FitnessFreaks</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900" ><NavLink  to="/home" activeStyle={{    fontWeight: "bold",    textDecorationLine: "underline"}}>Home</NavLink></div>
            <div  className="mr-5 hover:text-gray-900" ><NavLink  to="/contact" activeStyle={{    fontWeight: "bold",    textDecorationLine: "underline"}}>Contact</NavLink></div>
            <div  className="mr-5 hover:text-gray-900"><NavLink  to="/about" activeStyle={{    fontWeight: "bold",    textDecorationLine: "underline"}}>About us</NavLink></div>
            <div  className="mr-5 hover:text-gray-900"><NavLink  to="/content" activeStyle={{    fontWeight: "bold",    textDecorationLine: "underline"}}>Content</NavLink></div>
            </nav>
            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"><NavLink  to="/enroll" activeStyle={{    fontWeight: "bold",    textDecorationLine: "underline"}}>Enroll Now</NavLink>
            </button>
        </div>
    </header>
  );
}

export default Navbar;