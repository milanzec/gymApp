import React from 'react'
import { Stack,Typography } from '@mui/material'

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
    >
        <img src={Icon} alt="dumbell" style={{width:'40px',height:'40px'}} />
    </Stack>
  )
}

export default BodyPart