
import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'


function Menu(props) {
    
    return(
        <div className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
               <NavLink to={`/`} className="navbar-brand"> Josn Form Builder</NavLink>

               <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                   <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="menu">
                   <ul className="navbar-nav">
                       
                       <li className="nav-item">
                           <NavLink to={`/home`} className="nav-link">Home</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink to={`/register`} className="nav-link">Register</NavLink>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    )
}

export default Menu