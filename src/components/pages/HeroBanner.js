import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HomePic from "../../assets/images/gym andrea.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "26px",
      }}
    >
      <Typography fontWeight="600" fontSize="25px" color="#FF2625">
        Neki natpis
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "39px" },
        }}
      >
        EAT <br /> SLEEP <br /> TRAIN <br /> REPEAT
      </Typography>
      <Typography fontSize="25px" lineHeight="35px" marginBottom={4}>
        All the best exersizes at one place
      </Typography>

      <img src={HomePic} className="hero-banner-img" />
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "18px",
            textTransform: "capitalize",
            color: "white",
            borderRadius: "4px",
          }}
        >
          find exercises
        </a>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
