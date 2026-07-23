"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Fab } from "@mui/material";

import { SITE } from "@/config/site";

export default function WhatsAppButton(){

const link=`https://wa.me/${SITE.whatsapp}`;

return(

<Fab

color="success"

href={link}

target="_blank"

sx={{

position:"fixed",

right:25,

bottom:25,

zIndex:9999

}}

>

<WhatsAppIcon/>

</Fab>

)

}