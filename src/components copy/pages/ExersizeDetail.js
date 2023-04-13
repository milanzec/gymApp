import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../Detail";

import { exerciseOptions, fetchData } from "../../utils/fetchData";



const ExersizeDetail = () => {
  return (
    <Box>
      <Detail />
      <ExersizeVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExersizeDetail;
