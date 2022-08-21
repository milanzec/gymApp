import React,{useEffect,useState} from 'react'
import {Box,Stack,Typography,TextField,Button} from '@mui/material'

const SearchBar = () => {
  return (
   <Stack alignItems="center" p="35px" mt="37px" justifyContent="center" sx={{
    mt:'40px',position:'relative'
   }}>
    <Typography fontWeight={700} m="50px 0px" textAlign="center" sx={{
        fontSize:{lg:'44px',xs:'30px'}
    }} >Search For Workout</Typography>
    <Box position="relative" mb="70px"> 
    <TextField>
    </TextField>    
    </Box>
    
    <Button>Search</Button>
   </Stack>

  )
}

export default SearchBar