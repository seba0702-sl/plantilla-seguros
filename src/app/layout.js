import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QuoteProvider } from "@/context/QuoteContext";
import theme from "@/theme/theme";

import "./globals.css";

export const metadata = {
    title: "Fernández Seguros",
    description: "Cotizador Online",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">

            <body>

                <ThemeProvider theme={theme}>

                    <CssBaseline />

                    <QuoteProvider>

                        {children}

                    </QuoteProvider>

                </ThemeProvider>

            </body>

        </html>
    );
}