"use client";

import {

Box,
Container,
Grid,
Card,
CardContent,
Typography

} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FavoriteIcon from "@mui/icons-material/Favorite";

const data=[

{
icon:<DirectionsCarIcon sx={{fontSize:50}}/>,
title:"Automóviles"
},

{
icon:<TwoWheelerIcon sx={{fontSize:50}}/>,
title:"Motocicletas"
},

{
icon:<HomeIcon sx={{fontSize:50}}/>,
title:"Hogar"
},

{
icon:<StorefrontIcon sx={{fontSize:50}}/>,
title:"Comercio"
},

{
icon:<FavoriteIcon sx={{fontSize:50}}/>,
title:"Vida"
}

]

export default function Coverages(){

return(

<Box
id="coberturas"
sx={{
py:10,
background:"#F8F9FB"
}}
>

<Container maxWidth="lg">

<Typography

variant="h3"

align="center"

fontWeight={700}

mb={6}

>

Coberturas

</Typography>

<Grid container spacing={4}>

{

data.map(item=>(

<Grid

key={item.title}

size={{xs:12,sm:6,md:4,lg:2.4}}

>

<Card>

<CardContent
sx={{
textAlign:"center",
py:5
}}
>

<Box
color="primary.main"
mb={2}
>

{item.icon}

</Box>

<Typography
fontWeight={700}
>

{item.title}

</Typography>

</CardContent>

</Card>

</Grid>

))

}

</Grid>

</Container>

</Box>

)

}