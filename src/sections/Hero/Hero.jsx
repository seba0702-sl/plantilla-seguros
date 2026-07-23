"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {

Box,
Button,
Container,
Typography

} from "@mui/material";

import { SITE } from "@/config/site";

export default function Hero(){

return(

<Box

sx={{

background:"linear-gradient(135deg,#0057B8,#00AEEF)",

color:"white",

py:14,

}}

>

<Container maxWidth="lg">

<Typography

variant="h2"

fontWeight={800}

mb={3}

>

{SITE.slogan}

</Typography>

<Typography

variant="h5"

mb={5}

maxWidth={700}

>

{SITE.descripcion}

</Typography>

<Button

component={Link}

href="/cotizar"

variant="contained"

size="large"

sx={{

background:"white",

color:SITE.color,

fontWeight:700,

mr:2,

"&:hover":{

background:"#f5f5f5"

}

}}

>

Solicitar Cotización

</Button>

<Button

variant="outlined"

sx={{

borderColor:"white",

color:"white",

"&:hover":{

borderColor:"white"

}

}}

>

Conocer Coberturas

</Button>

</Container>

</Box>

)

}