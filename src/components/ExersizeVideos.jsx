import React from "react";

import { Box, Stack, Typography } from "@mui/material";

const ExersizeVideos = ({ videos, name }) => {
  console.log(videos);

  if (!videos.length) return "..Loading";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" textTransform="capitalize">
        Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "100px", xs: "0" } }}
      >
        {videos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography color="#000" variant="h6">
                {item.video.title}
              </Typography>
              <Typography color="#000" variant="h7">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExersizeVideos;
