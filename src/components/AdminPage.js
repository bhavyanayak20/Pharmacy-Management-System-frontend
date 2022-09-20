import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";
import styled from "styled-components";



export default function AdminPage() {
  return (
    
   <div className="Container">
        <div className="jumbotron" >
      
            {/* <h2>This is admin page</h2> */}
            
            <Link to = "/drugs" className = "btn btn-primary mb-2" > View Drugs </Link>
            <br></br>
            <Link to = "/Suppliers" className = "btn btn-primary mb-2"  > View Suppliers </Link>
            <br></br>
            <Link to = "/add-Supplier" className = "btn btn-primary mb-2"  > add Suppliers </Link>
            <br></br>
            <Link to = "/users" className = "btn btn-primary mb-2"  > View Users </Link>
            <br></br>
            <Link to = "/Orders" className = "btn btn-primary mb-2"  > View Orders </Link>
        </div>
        </div>

  
  )
}
