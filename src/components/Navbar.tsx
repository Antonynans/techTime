import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 py-2 z-50 bg-[#004DB3]">
        <div className="container mx-auto  flex flex-wrap items-center justify-between px-6">
          <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center">
            <a
               onClick={() => navigate("/")}
              className="font-medium tracking-wider transition-colors cursor-pointer"
            >
              <img src={logo} alt="logo" />
            </a>

            <div className="flex items-center">
              <div className="lg:hidden"></div>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:h-auto h-screen justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto lg:transform-none translate-y-[-50%] ">
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  About Us
                </NavLink>
              </li>
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="/courses"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  Courses
                </NavLink>
              </li>
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="/testimonial"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  Testimonial
                </NavLink>
              </li>
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="/community"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  Community
                </NavLink>
              </li>
              <li className="px-4 py-2 flex text-[#AAC4E6] items-center font-bold leading-snug hover:text-[#ffffff]">
                <NavLink
                  to="#"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "",
                  })}
                >
                  <button className="bg-white text-[#004DB3] rounded-[4px] px-8 py-4 font-bold">
                    Enroll Now
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </nav>
    </>
  );
}
