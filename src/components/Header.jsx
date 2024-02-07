// import React from "react";
// import logo from "../assets/img/logo.svg";
// const Header = () => {
//     return(
//         <>
//         <header className="flex items-center justify-between px-[20px] md:px-[50px] py-[20px] border-2 border-black-200 border-b-black-900">
//             <img src={logo}/>
            
//             <div className="md:flex hidden items-center gap-[50px]">
//             <ul className="flex gap-[50px] text-sm">
//                 <li>Home</li>
//                 <li>Contact</li>
//                 <li>Price</li>
//                 <li>FAQ</li>
//                 <li>Login</li>
//             </ul>
//             <button className="bg-[#7853F1] p-[10px] rounded-lg text-white text-sm">Template</button>
//             </div>
//         </header>
//         </>
//     )
// };
// export default Header;



import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import "../style/index.css";
const Header = () =>{
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <>
        <header>
        <img src={logo}/>
        <div className="qwert">
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Contact</a>
                <a href="/#">Price</a>
                <a href="/#">FAQ</a>
                <a href="/#">Login</a>
                <button className="bg-[#7853F1] p-[10px] rounded-lg text-white text-sm">Template</button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                   <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
            </div>
        </header>
        </>
    )
};
export default Header