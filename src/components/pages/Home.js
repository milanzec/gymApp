import React,{useState} from 'react'

import {Box} from '@mui/material'

import HeroBanner from './HeroBanner'
import SearchBar from './SearchBar'
import Exersizes from './Exersizes'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  console.log(bodyPart)

  return (
    <Box>
    <HeroBanner />
    <SearchBar 
       setExercises={setExercises} 
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}
    />
    <Exersizes
       setExercises={setExercises} 
       bodyPart={bodyPart} 
       exercises={exercises}
    />
    </Box>
  )
}

export default Home