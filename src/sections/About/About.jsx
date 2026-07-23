"use client";

import {

Box,
Container,
Grid,
Typography

} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const items=[

"Atención personalizada",

"Asesoramiento integral",

"Más de 20 años de experiencia",

"Trabajamos con las principales compañías"

]

export default function About(){

return(

<Box

id="nosotros"

sx={{

py:10,

}}

>

<Container maxWidth="lg">

<Grid container spacing={8}>

<Grid size={{xs:12,md:6}}>

<Typography

variant="h3"

fontWeight={700}

mb={3}

>

¿Por qué elegirnos?

</Typography>

<Typography
color="text.secondary"
>

Te acompañamos antes, durante y después de contratar tu seguro.

Nuestro objetivo es encontrar la mejor cobertura para vos al mejor precio.

</Typography>

</Grid>

<Grid size={{xs:12,md:6}}>

{

items.map(item=>(

<Box

key={item}

sx={{

display:"flex",

alignItems:"center",

mb:3,

}}

>

<CheckCircleIcon
color="primary"
sx={{mr:2}}
/>

<Typography>

{item}

</Typography>

</Box>

))

}

</Grid>

</Grid>

</Container>

</Box>

)

}