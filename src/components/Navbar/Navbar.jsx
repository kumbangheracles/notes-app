import React from "react";
import SearchBox from "./SearchBox";
import Logo from './Logo'

export default function Navbar(){
  return(
    <div className="navbar">
      <Logo />
      <SearchBox />
    </div>
  )
}
