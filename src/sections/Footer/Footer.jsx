"use client";

import {

Box,
Container,
Grid,
Typography,
IconButton

} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { SITE } from "@/config/site";

export default function Footer(){

return(

<Box

id="contacto"

sx={{

background:"#0E1A2B",

color:"white",

mt:10,

pt:8,

pb:5

}}

>

<Container maxWidth="lg">

<Grid container spacing={6}>

<Grid size={{xs:12,md:4}}>

<Typography

variant="h5"

fontWeight={700}

mb={3}

>

{SITE.empresa}

</Typography>

<Typography>

Protegemos tu patrimonio con las mejores compañías del mercado.

</Typography>

</Grid>

<Grid size={{xs:12,md:4}}>

<Typography

fontWeight={700}

mb={2}

>

Contacto

</Typography>

<Box sx={{display:"flex",alignItems:"center",mb:2}}>

<PhoneIcon sx={{mr:1}}/>

<Typography>

{SITE.telefono}

</Typography>

</Box>

<Box sx={{display:"flex",alignItems:"center"}}>

<EmailIcon sx={{mr:1}}/>

<Typography>

{SITE.email}

</Typography>

</Box>

</Grid>

<Grid size={{xs:12,md:4}}>

<Typography

fontWeight={700}

mb={2}

>

Seguinos

</Typography>

<IconButton
sx={{color:"white"}}
>

<WhatsAppIcon/>

</IconButton>

</Grid>

</Grid>

<Box

sx={{

borderTop:"1px solid rgba(255,255,255,.15)",

mt:5,

pt:3,

textAlign:"center"

}}

>

<Typography
variant="body2"
>

© {new Date().getFullYear()} {SITE.empresa}

</Typography>

</Box>

</Container>

</Box>

)

}