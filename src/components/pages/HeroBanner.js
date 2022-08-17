import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

import HomePic from '../../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <div>
    <Box
    sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'},position:'relative'
    }}
    >
<Typography
fontWeight="600"
fontSize="25px"
color="#FF2625"

>
    Neki natpis
</Typography>

        <img src={HomePic} className ="hero-banner-img"/>
    </Box>
    </div>
  )
}

export default HeroBanner