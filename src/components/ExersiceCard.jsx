import { Button, Stack, Typography,Card } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

const ExersiceCard = ({key,exercise}) => {
    console.log(exercise)
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
     <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
     <Stack direction="row" >
        <Button  sx={{
                ml : '25px',
                color:'#fff',
                background: '#ffa9a9',
                textTransform: 'capitalize',
                fontSize:'14px',
                borderRadius:'20px',
                
            }}>
            {exercise.bodyPart}
        </Button>
        <Button  sx={{
                ml : '25px',
                color:'#fff',
                background: '#fcc757',
                textTransform: 'capitalize',
                fontSize:'14px',
                borderRadius:'20px',
                
            }}>
            {exercise.target}
        </Button>
     </Stack>
     <Typography  sx={{ml:'21px', mt:'11px',fontSize:'22px', color:"#000", fontWeight:"bold", pb:'10px', textTransform:'capitalize'}}>
              {exercise.name}
     </Typography>
    </Link>
    
  )
}

export default ExersiceCard