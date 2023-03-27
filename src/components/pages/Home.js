import React from 'react'

import {Box} from '@mui/material'

import HeroBanner from './HeroBanner'
import SearchBar from './SearchBar'
import Exersizes from './Exersizes'

const Home = () => {
  return (
    <Box>
    <HeroBanner />
    <SearchBar />
    <Exersizes/>
    </Box>
  )
}

export default Home