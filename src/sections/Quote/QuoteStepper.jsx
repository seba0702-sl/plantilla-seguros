"use client";

import { Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "Vehículo",
  "Titular",
  "Cobertura",
];

export default function QuoteStepper({ step }) {
  return (
    <Stepper
      activeStep={step}
      alternativeLabel
      sx={{ mb: 5 }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}