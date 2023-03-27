import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

const SearchBar = () => {
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
          value=""
          onChange={(e) => {}}
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
        >
          Search
          </Button>
      </Box>
    </Stack>
  );
};

export default SearchBar;
