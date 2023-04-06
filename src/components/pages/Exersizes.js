import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";

import ExersiceCard from "../ExersiceCard";
import { fetchData, exersizeOptions } from "../../utils/fetchData";

const Exersizes = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
  
      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/",
          exersizeOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exersizeOptions
        );
      }
      setExercises(exerciseData);
    };
  
    fetchExerciseData();
  }, [bodyPart, setExercises]);
  

  if (exercises && exercises.length > 0) {
    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const currentExercises = exercises.slice(
      indexOfFirstExercise,
      indexOfLastExercise
    );

    const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage);

      window.scrollTo({ top: 1000, behavior: "smooth" });
    };


    return (
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
        >
          {currentExercises.map((exer, index) => (
            <ExersiceCard key={index} exercise={exer} />
          ))}
        </Stack>
        <Stack mt="120px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              count={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
            />
          )}
          {console.log(exercises)}
        </Stack>
      </Box>
    );
  }
};
export default Exersizes;
