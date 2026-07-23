"use client";

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { SITE } from "@/config/site";

export default function Companies() {
  return (
    <Box
      id="companias"
      sx={{
        py: 10,
        background: "#ffffff",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          fontWeight={700}
          align="center"
          mb={2}
        >
          Compañías con las que trabajamos
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Elegimos la mejor alternativa para cada cliente.
        </Typography>

        <Grid container spacing={4}>

          {SITE.companias.map((item) => (

            <Grid
              key={item.nombre}
              size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}
            >

              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >

                <CardContent>

                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.nombre}
                    sx={{
                      height: 70,
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />

                  <Typography fontWeight={700}>
                    {item.nombre}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}