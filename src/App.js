import React from 'react'
import {Route,Router} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import {Box} from '@mui/material'

const App = () => {
  return (
    <div>
        <Box  width="400px"  >
            <Navbar /> 
            <Router>
                <Route/>
                <Route/>
            </Router>
        </Box>
    </div>
  )
}

export default App