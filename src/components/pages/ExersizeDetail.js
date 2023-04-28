import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../Detail";
import ExersizeVideos from "../ExersizeVideos";
import SimilarExercises from "../SimilarExercises";

import { exersizeOptions, fetchData, YToptions } from "../../utils/fetchData";

const ExersizeDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [targetExercises, setTargetExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exersizeOptions
      );
      setExerciseDetail(exerciseData);

      const videosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseData.name}`,
        YToptions
      );
      setVideos(videosData.contents);

      const targetExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseData.target}`,
        exersizeOptions
      );
      setTargetExercises(targetExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`,
        exersizeOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExersizeVideos videos={videos} name={exerciseDetail.name} />
      <SimilarExercises
        targetExercises={targetExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExersizeDetail;
