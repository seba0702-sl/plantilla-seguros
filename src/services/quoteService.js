export async function enviarCotizacion(data) {

    console.log("Enviando cotización...");

    console.table(data);

    /*
    Próximamente

    await fetch(process.env.NEXT_PUBLIC_GAS_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    */

    return {
        ok:true
    };

}