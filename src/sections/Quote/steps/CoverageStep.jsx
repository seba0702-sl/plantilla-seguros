"use client";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

import { useFormContext } from "react-hook-form";

const OPTIONS = [
  {
    id: "rc",
    title: "Responsabilidad Civil",
    icon: "🚗",
  },
  {
    id: "tc",
    title: "Terceros Completo",
    icon: "🚙",
  },
  {
    id: "tr",
    title: "Todo Riesgo",
    icon: "⭐",
  },
];

export default function CoverageStep() {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const cobertura = watch("cobertura");

  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        mb={4}
      >
        Tipo de Cobertura
      </Typography>

      <Grid container spacing={3}>

        {OPTIONS.map((item) => (

          <Grid
            key={item.id}
            size={{ xs: 12, md: 4 }}
          >
            <Card
              sx={{
                border:
                  cobertura === item.id
                    ? "2px solid #0057B8"
                    : "2px solid #E0E0E0",

                borderRadius: 3,

                transition: ".25s",

                boxShadow:
                  cobertura === item.id
                    ? 6
                    : 1,
              }}
            >
              <CardActionArea
                onClick={() =>
                  setValue("cobertura", item.id, {
                    shouldValidate: true,
                  })
                }
              >
                <CardContent
                  sx={{
                    py: 5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    fontSize={50}
                    mb={2}
                  >
                    {item.icon}
                  </Typography>

                  <Typography
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        ))}

      </Grid>

      {errors.cobertura && (
        <Typography
          color="error"
          mt={2}
        >
          Seleccione una cobertura.
        </Typography>
      )}

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Observaciones"
        placeholder="Ej.: El vehículo duerme en cochera, posee GNC, uso particular, etc."
        sx={{
          mt: 5,
        }}
        {...register("observaciones")}
      />
    </>
  );
}