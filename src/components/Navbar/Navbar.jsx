import React from "react";
import SearchBox from "./SearchBox";
import Logo from './Logo'

export default function Navbar(){
    return(
        <nav className="navbar">
            <Logo />
            <SearchBox />
        </nav>
    )
}