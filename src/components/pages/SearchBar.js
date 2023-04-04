import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import {exersizeOptions,fetchData} from "../../utils/fetchData";

import HorizontalScrollbar from "../HorizontalScrollbar";

const SearchBar = ({setExercises,bodyPart,setBodyPart}) => {

const [search, setSearch] = useState('')
const [bodyParts, setBodyParts] = useState([])



useEffect(() => {
const fetchExercisesData = async () =>{
   const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exersizeOptions)

   setBodyParts(['all', ...bodyPartData]) 
}

fetchExercisesData()
console.log(bodyParts)

}, [])


const handleSearch = async ()=>{
 if(search){
  const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exersizeOptions)
  console.log(exercisesData)

const searchedExercises = exercisesData.filter(
  (exercise) => exercise.name.toLowerCase().includes(search) 
  || exercise.target.toLowerCase().includes(search) 
  || exercise.bodyPart.toLowerCase().includes(search)
  ||exercise.equipment.toLowerCase().includes(search)
  )
 
   setSearch('')  
   setExercises(searchedExercises)
   

 }
}

  return (
    <Stack
      alignItems="center"
      p="35px"
      mt="37px"
      justifyContent="center"
      sx={{
        mt: "40px",
        position: "relative",
      }}
    >
      <Typography
        fontWeight={700}
        m="50px 0px"
        textAlign="center"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
      >
        Search For Workout
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
        sx={{
          input:{
            fontWeight:'700',
            border: 'none',
            borderRadius:'4px'
          },
          width:{lg:'800px',xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'

        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exersizes"
          type="text"
        />
        <Button className="search-btn"
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height: '56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        >
          Search
          </Button>
      </Box>
      <Box 
      sx={{
        position:'relative',
        width: '100%',
        p:'20px'
      }}
      >
       <HorizontalScrollbar  data={bodyParts}/>   
      </Box>
    </Stack>
  );
};

export default SearchBar
