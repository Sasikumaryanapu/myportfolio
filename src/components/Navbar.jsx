import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import React from 'react'
import {  NavLink } from 'react-router-dom'
// import { useAuth } from '../Authenication/Auth'

const NavBar=styled(AppBar)`
  background-color:transparent;
  position:fixed;
  display:flex;
  flex-direction: row;
  justify-content:flex-end;
  margin:20px;
  gap:30px;
  font-size:20px;
  font-weight:bold;
  box-shadow:none;  
`
const Links=styled(NavLink)`
color:blueviolet;
text-decoration:none;
font-family:sans-serif;
&:hover{
  border-bottom:4px solid blueviolet;
    
}
`
const styleLink=({isActive})=>{
  return{
    borderBottom:isActive&&"4px solid blueviolet"
  }
}


function Navbar() {

  // const auth=useAuth()

  return (
    <>
     <NavBar>
        <Links style={styleLink} to="/">Home</Links>
        <Links style={styleLink} to="/Skills">Skills</Links>
        <Links style={styleLink}  to="/Projects">Projects</Links>
        <Links style={styleLink} to="/Education">Education</Links>
        <Links style={styleLink} to="/Contact">Contact</Links>
        {/* <Links style={styleLink} to="/Certificates">Certificates</Links> */}
        {/* {
          !auth.user && (<NavLink to="/login">
            login
          </NavLink>)
        } */}

    </NavBar>
    </ >
   
  )
}

export default Navbar