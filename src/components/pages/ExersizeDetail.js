import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../Detail";
import ExersizeVideos from "../ExersizeVideos";
import SimilarExercises from "../SimilarExercises";

import { exersizeOptions, fetchData } from "../../utils/fetchData";

const ExersizeDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exersizeOptions
      );
      setExerciseDetail(exerciseData);
    };

    fetchExerciseData();
    console.log(exerciseDetail);
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExersizeVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExersizeDetail;
