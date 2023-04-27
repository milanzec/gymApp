import React from "react";
import { Stack, Button, Typography } from "@mui/material";

import BodypartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, equipment, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodypartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

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
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h5">
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}.It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
