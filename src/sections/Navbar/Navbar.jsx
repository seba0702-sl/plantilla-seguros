"use client";

import Link from "next/link";
import { useState } from "react";

import {

    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container

} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { NAVIGATION } from "@/config/navigation";
import appConfig from "@/config/appConfig";
console.log("APP CONFIG:", appConfig);
console.log("PRODUCER:", appConfig?.producer);
export default function Navbar(){

    const [open,setOpen]=useState(false);

    return(

<AppBar
position="sticky"
color="inherit"
elevation={1}
>

<Container maxWidth="lg">

<Toolbar>

<Typography
variant="h5"
fontWeight={800}
sx={{
flexGrow:1,
color: appConfig.producer.primaryColor
}}
>

{appConfig.producer.company}

</Typography>

<Box
sx={{
display:{
xs:"none",
md:"flex"
},
gap:1
}}
>

{

NAVIGATION.map(item=>(

<Button
key={item.label}
href={item.href}
>

{item.label}

</Button>

))

}

<Button

component={Link}

href="/cotizar"

variant="contained"

>

Cotizar

</Button>

</Box>

<IconButton

sx={{
display:{
xs:"block",
md:"none"
}
}}

onClick={()=>setOpen(true)}

>

<MenuIcon/>

</IconButton>

<Drawer

anchor="right"

open={open}

onClose={()=>setOpen(false)}

>

<List
sx={{
width:260
}}
>

{

NAVIGATION.map(item=>(

<ListItem
key={item.label}
disablePadding
>

<ListItemButton>

<ListItemText
primary={item.label}
/>

</ListItemButton>

</ListItem>

))

}

</List>

</Drawer>

</Toolbar>

</Container>

</AppBar>

)

}