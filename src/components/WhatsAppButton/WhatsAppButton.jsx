"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab } from "@mui/material";

import appConfig from "@/config/appConfig";

export default function WhatsAppButton() {

    const mensaje = encodeURIComponent(
        appConfig.contact.whatsappMessage
    );

    const link =
        `https://wa.me/${appConfig.contact.whatsapp}?text=${mensaje}`;

    return (

        <Fab
            color="success"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            sx={{
                position: "fixed",
                right: 25,
                bottom: 25,
                zIndex: 9999
            }}
        >

            <WhatsAppIcon />

        </Fab>

    );

}