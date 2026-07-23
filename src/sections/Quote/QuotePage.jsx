"use client";

import { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
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
export default function QuotePage() {

  const [step, setStep] = useState(0);

  //---------------------------------------
  // React Hook Form
  //---------------------------------------

  const methods = useForm({

    defaultValues:{

      // Vehículo

      marca:"",
      modelo:"",
      anio:"",
      patente:"",

      // Titular

      nombre:"",
      apellido:"",
      dni:"",
      telefono:"",
      email:"",

      // Cobertura

      cobertura:""

    }

  });

  //---------------------------------------
  // Navegación
  //---------------------------------------

  const next = () => {

    if(step<2){

      setStep(step+1);

    }

  };

  const back = () => {

    if(step>0){

      setStep(step-1);

    }

  };

  //---------------------------------------
  // Finalizar
  //---------------------------------------

  const onSubmit = async (data) => {

    try{

        const respuesta = await enviarCotizacion(data);

        if(respuesta.ok){

            alert("Cotización enviada correctamente");

        }

    }
    catch(error){

        console.error(error);

        alert("Ocurrió un error.");

    }

};

  return (

<FormProvider {...methods}>

<Container

maxWidth="md"

sx={{

py:8

}}

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

Completá los siguientes datos para recibir una cotización personalizada.

</Typography>

<QuoteStepper

step={step}

/>

{

step===0&&(

<VehicleStep/>

)

}

{

step===1&&(

<PersonStep/>

)

}

{

step===2&&(

<CoverageStep/>

)

}

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