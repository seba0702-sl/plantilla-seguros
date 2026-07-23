"use client";

import {
  Grid,
  TextField,
  Typography,
  Autocomplete,
  MenuItem,
} from "@mui/material";

import { useFormContext, Controller } from "react-hook-form";
import { VEHICLES } from "@/config/vehicleData";

export default function VehicleStep() {
  const {
    control,
    register,
    watch,
    setValue,
  } = useFormContext();

  const marca = watch("marca");

  const modelos =
    VEHICLES.find((v) => v.marca === marca)?.modelos || [];

  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: 25 },
    (_, i) => currentYear - i
  );

  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        mb={4}
      >
        Datos del Vehículo
      </Typography>

      <Grid container spacing={3}>

        {/* Marca */}

        <Grid size={{ xs: 12, md: 6 }}>

          <Controller
            name="marca"
            control={control}
            render={({ field }) => (
              <Autocomplete
                options={VEHICLES.map((v) => v.marca)}
                value={field.value || null}
                onChange={(e, value) => {

                  field.onChange(value);

                  setValue("modelo", "");

                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Marca"
                  />
                )}
              />
            )}
          />

        </Grid>

        {/* Modelo */}

        <Grid size={{ xs: 12, md: 6 }}>

          <Controller
            name="modelo"
            control={control}
            render={({ field }) => (
              <Autocomplete
                disabled={!marca}
                options={modelos}
                value={field.value || null}
                onChange={(e, value) => {

                  field.onChange(value);

                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Modelo"
                  />
                )}
              />
            )}
          />

        </Grid>

        {/* Año */}

        <Grid size={{ xs: 12, md: 6 }}>

          <TextField
            fullWidth
            select
            label="Año"
            defaultValue=""
            {...register("anio")}
          >
            {years.map((year) => (
              <MenuItem
                key={year}
                value={year}
              >
                {year}
              </MenuItem>
            ))}
          </TextField>

        </Grid>

        {/* Patente */}

        <Grid size={{ xs: 12, md: 6 }}>

          <TextField
            fullWidth
            label="Patente"
            placeholder="AA123BB"
            {...register("patente")}
          />

        </Grid>

      </Grid>
    </>
  );
}