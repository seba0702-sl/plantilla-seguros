import { NextResponse } from "next/server";
import appConfig from "@/config/appConfig";

export async function POST(request) {

    try {

        const data = await request.json();

        const response = await fetch(

            appConfig.integrations.googleScriptUrl,

            {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            }

        );

        const texto = await response.text();

        console.log("RESPUESTA APPS SCRIPT:", texto);

        let resultado;

        try {
            resultado = JSON.parse(texto);
        } catch {
            resultado = {
                ok: false,
                error: texto
            };
        }

        return NextResponse.json(resultado);

    } catch (error) {

        console.error(error);

        return NextResponse.json({
            ok: false,
            error: error.message
        });

    }

}