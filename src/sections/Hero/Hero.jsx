"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import appConfig from "@/config/appConfig";

export default function Hero() {

  return (

    <Box
      sx={{
        background: `linear-gradient(135deg,
          ${appConfig.producer.primaryColor},
          ${appConfig.producer.secondaryColor})`,
        color: "white",
        py: 14,
      }}
    >

      <Container maxWidth="lg">

        <Typography
          variant="h2"
          fontWeight={800}
          mb={3}
        >
          {appConfig.producer.slogan}
        </Typography>

        <Typography
          variant="h5"
          mb={5}
          maxWidth={700}
        >
          {appConfig.producer.description}
        </Typography>

        <Button
          component={Link}
          href="/cotizar"
          variant="contained"
          size="large"
          sx={{
            background: "white",
            color: appConfig.producer.primaryColor,
            fontWeight: 700,
            mr: 2,
            "&:hover": {
              background: "#f5f5f5",
            },
          }}
        >
          Solicitar Cotización
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            "&:hover": {
              borderColor: "white",
              background: "rgba(255,255,255,.08)",
            },
          }}
        >
          Conocer Coberturas
        </Button>

      </Container>

    </Box>

  );

}