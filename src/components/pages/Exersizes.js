import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

import ExersiceCard from '../ExersiceCard'

const Exersizes = ({exercises,setExercises,bodyPart}) => {
  return (
    <Box 
    id="exercises" 
    sx={{ mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{gap:{lg:'110px',xs:'50px'}}}>
        {exercises.map((exer, index)=><ExersiceCard key={index} exercise={exer}/>)}
      </Stack>
    </Box>
  )
}

export default Exersizes