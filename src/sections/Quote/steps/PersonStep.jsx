"use client";

import {
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useFormContext } from "react-hook-form";

export default function PersonStep() {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>

      <Typography
        variant="h5"
        fontWeight={700}
        mb={4}
      >
        Datos del Titular
      </Typography>

      <Grid container spacing={3}>

        {/* Nombre */}

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Nombre"

            {...register("nombre", {
              required: "Ingrese el nombre",
            })}

            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />
        </Grid>

        {/* Apellido */}

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Apellido"

            {...register("apellido", {
              required: "Ingrese el apellido",
            })}

            error={!!errors.apellido}
            helperText={errors.apellido?.message}
          />
        </Grid>

        {/* DNI */}

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="DNI"

            {...register("dni", {
              required: "Ingrese el DNI",
              pattern: {
                value: /^[0-9]{7,8}$/,
                message: "DNI inválido",
              },
            })}

            error={!!errors.dni}
            helperText={errors.dni?.message}
          />
        </Grid>

        {/* Celular */}

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Celular"

            {...register("telefono", {
              required: "Ingrese un teléfono",
              pattern: {
                value: /^[0-9+\-\s()]{8,20}$/,
                message: "Número inválido",
              },
            })}

            error={!!errors.telefono}
            helperText={errors.telefono?.message}
          />
        </Grid>

        {/* Email */}

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Correo electrónico"

            {...register("email", {
              required: "Ingrese un email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email inválido",
              },
            })}

            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

      </Grid>

    </>
  );

}