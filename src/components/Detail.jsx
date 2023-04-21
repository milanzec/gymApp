import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, equipment, target } = exerciseDetail;

  return (
    <Stack
      sx={{
        gap: "60px",
        alignItems: "center",
        p: "20px",
        flexDirection: { lg: "row" },
      }}
    >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography>{name}</Typography>
        <Typography>
          Exercises keep you strong.{name} {` `}
          is one of the best exercises to target your {target}.It will help you
          improve your mood and gain energy.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
