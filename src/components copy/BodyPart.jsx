import React from 'react'
import { capitalize, Stack,Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack 
       type="button"
       alignItems="center"
       justifyContent="center"
       className='bodyPart-card'
       sx={{ 
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        cursor: 'pointer',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '270px',
        gap:'45px'
            }}
        onClick={()=>{
            setBodyPart(item)
            window.scrollTo({ top:1800, left:100, behavior:'smooth'})
        
        }} 
         
            
    >
        <img src={Icon} alt="dumbell" style={{width:'40px',height:'40px'}} />
        <Typography fontSize={25} fontWeight="bold" textTransform="capitalize" color="#3A1212">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart