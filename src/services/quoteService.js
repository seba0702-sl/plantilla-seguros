export async function enviarCotizacion(data) {

    const response = await fetch("/api/cotizacion", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return await response.json();

}