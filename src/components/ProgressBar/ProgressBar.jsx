"use client";

import { Box, LinearProgress, Typography } from "@mui/material";

export default function ProgressBar({ step }) {

  const value = (step / 3) * 100;

  return (

    <Box sx={{ mb: 4 }}>

      <Typography
        fontWeight="bold"
        mb={1}
      >
        Paso {step} de 3
      </Typography>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 10,
        }}
      />

    </Box>

  );

}