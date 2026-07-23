"use client";

import { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Alert,
  CircularProgress,
  Box,
} from "@mui/material";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

import QuoteStepper from "./QuoteStepper";

import VehicleStep from "./steps/VehicleStep";
import PersonStep from "./steps/PersonStep";
import CoverageStep from "./steps/CoverageStep";

import NavigationButtons from "@/components/NavigationButtons/NavigationButtons";

import { enviarCotizacion } from "@/services/quoteService";
import { abrirWhatsApp } from "@/services/whatsappService";

import appConfig from "@/config/appConfig";

export default function QuotePage() {

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const methods = useForm({

    defaultValues:{

      marca:"",
      modelo:"",
      anio:"",
      patente:"",

      nombre:"",
      apellido:"",
      dni:"",
      telefono:"",
      email:"",

      cobertura:"",
      observaciones:""

    }

  });

  //---------------------------------------
  // Navegación
  //---------------------------------------

  const next = () => {

    if(step < 2){

      setStep(step + 1);

    }

  };

  const back = () => {

    if(step > 0){

      setStep(step - 1);

    }

  };

  //---------------------------------------
  // Enviar
  //---------------------------------------

  const onSubmit = async (data) => {

    setLoading(true);
    setError("");

    try{

      const respuesta = await enviarCotizacion(data);

console.log("RESPUESTA API:", respuesta);

if (respuesta.ok) {
    abrirWhatsApp(data);
} else {
    setError(
        respuesta.error || "No se pudo registrar la cotización."
    );
}

    }catch(err){

      console.error(err);

      setError("Ocurrió un error al enviar la solicitud.");

    }finally{

      setLoading(false);

    }

  };

  return (

<FormProvider {...methods}>

<Container
maxWidth="md"
sx={{py:8}}
>

<Card
sx={{
borderRadius:5,
boxShadow:6
}}
>

<CardContent
sx={{
p:{xs:3,md:5}
}}
>

<Typography
variant="h3"
fontWeight={700}
align="center"
mb={2}
>

Solicitar Cotización

</Typography>

<Typography
align="center"
color="text.secondary"
mb={5}
>

{appConfig.quote.description}

</Typography>

<QuoteStepper step={step}/>

{step===0 && <VehicleStep/>}
{step===1 && <PersonStep/>}
{step===2 && <CoverageStep/>}

{error && (

<Alert severity="error" sx={{mt:3}}>

{error}

</Alert>

)}

{loading && (

<Box sx={{display:"flex",justifyContent:"center",mt:3}}>

<CircularProgress/>

</Box>

)}

<NavigationButtons

back={back}

next={
step===2
?
methods.handleSubmit(onSubmit)
:
next
}

firstStep={step===0}

lastStep={step===2}

/>

</CardContent>

</Card>

</Container>

</FormProvider>

  );

}