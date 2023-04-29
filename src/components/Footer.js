import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#d7d7c1">
      <Stack gap="40px" alignItems="center" pb="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px" textTransform="capitalize">
          made by milan zec
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
