import React, {useEffect, useState} from 'react';
import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import "./Header.css"




const Header = () => {
    const[active,setActivetab]=useState("Home");
    const location=useLocation();
    useEffect(()=> {
if(location.pathname === "/") {
   setActivetab("home")
 } else if(location.pathname === "/add") {
        setActivetab("home")
 } else if(location.pathname === "/about") {
    setActivetab("about")
}

    },[location
    ])

  return (
    <div classname="header">
    <p className="logo">User Management System</p>
    <div className="header-right">
    <Link to="/">
    <p classname={`${activetab === "home" ? "active": ""}`} onClick={()=> setActivetab("home")}> 
    Home
    </p>  
    </Link>
    <Link to="/about">
    <p classname={`${activetab === "Adduser" ? "active": ""}`} onClick={()=> setActivetab("Adduser")}>
    Adduser
    </p>
    </Link>
    <Link to="/about">
    <p classname={`${activetab === "About" ? "active": ""}`} onClick={()=> setActivetab("About")}>
    About
    </p>
    </Link>
    </div>    
    </div>
  )
}

export default Header