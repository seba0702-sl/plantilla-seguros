"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        primary: {
            main: "#0057B8",
        },

        secondary: {
            main: "#00AEEF",
        },

        background: {
            default: "#F8F9FB",
        },

    },

    typography: {

        fontFamily: "Roboto, sans-serif",

        h1: {
            fontWeight: 800,
        },

        h2: {
            fontWeight: 700,
        },

        h3: {
            fontWeight: 700,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },

    },

    shape: {
        borderRadius: 14,
    },

    components: {

        MuiButton: {

            styleOverrides: {

                root: {

                    borderRadius: 12,

                    paddingInline: 24,

                    paddingBlock: 12,

                },

            },

        },

        MuiCard: {

            styleOverrides: {

                root: {

                    borderRadius: 18,

                    boxShadow:
                        "0px 8px 25px rgba(0,0,0,.08)",

                },

            },

        },

    },

});

export default theme;