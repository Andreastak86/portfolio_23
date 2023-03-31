import React from "react";
import { ImHome } from "react-icons/im";
import { GoPerson } from "react-icons/go";
// import { MdWork } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
// import { MdDesignServices } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav className='flex flex-row justify-center items-center gap-4 mb-5 border-2 border-red-500 fixed'>
            <a
                href='/'
                onClick={() => setActiveNav("/")}
                className={activeNav === "/" ? "active" : ""}
            >
                <ImHome />
            </a>
            <a
                href='/about'
                onClick={() => setActiveNav("/about")}
                className={activeNav === "/about" ? "active" : ""}
            >
                {" "}
                <GoPerson />
            </a>
            <a
                href='/xp'
                onClick={() => setActiveNav("/xp")}
                className={activeNav === "/xp" ? "active" : ""}
            >
                <MdContactPage />
            </a>
            <a
                href='/portfolio'
                onClick={() => setActiveNav("/portfolio")}
                className={activeNav === "/portfolio" ? "active" : ""}
            >
                <FaBook />
            </a>

            <a
                href='/contact'
                onClick={() => setActiveNav("/contact")}
                className={activeNav === "/contact" ? "active" : ""}
            >
                <IoMdContacts />
            </a>
        </nav>
    );
};

export default Nav;
