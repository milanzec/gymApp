import React from 'react'
import Home from './pages/Home'
import {Link}  from 'react-router-dom'
import {Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
  <Stack
  direction="row"
  justifyContent="space-around"
  sx={{gap:{sm:"120px",xs:"40px"},mt:{sm:'32px',xs:'20px'}}}
  >
    <Link to="/">
    <img src={Logo}  alt="logo" style={{width:'45px',height:'45px',margin:'5px 20px'}}/>
    </Link>
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
      <Link to={Home} style={{textDecoration:'none',color:"#3A1212",borderBottom:"3px solid #FF2625"}}>Home</Link>
      <a href='#exersizes' style={{textDecoration:'none',color:"#3A1212",borderBottom:"3px solid #FF2625"}}>Exersizes</a>
    </Stack>
  </Stack>
  )
}

export default Navbar