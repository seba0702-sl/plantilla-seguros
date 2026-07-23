"use client";

import {
    Box,
    Button
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SendIcon from "@mui/icons-material/Send";

export default function NavigationButtons({

    back,
    next,
    firstStep,
    lastStep

}){

return(

<Box

sx={{

display:"flex",

justifyContent:"space-between",

mt:6

}}

>

<Button

disabled={firstStep}

startIcon={<ArrowBackIcon/>}

onClick={back}

>

Atrás

</Button>

<Button

variant="contained"

endIcon={

lastStep

?

<SendIcon/>

:

<ArrowForwardIcon/>

}

onClick={next}

>

{

lastStep

?

"Solicitar Cotización"

:

"Siguiente"

}

</Button>

</Box>

)

}