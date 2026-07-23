import appConfig from "@/config/appConfig";

export function abrirWhatsApp(data) {

    const mensaje = `🚗 NUEVA COTIZACIÓN

Cliente: ${data.nombre} ${data.apellido}

Teléfono: ${data.telefono}

Email: ${data.email}

Vehículo:
${data.marca} ${data.modelo}

Año: ${data.anio}

Patente: ${data.patente}

Cobertura:
${data.cobertura}

Observaciones:
${data.observaciones || "-"}`;

    const url =
        `https://wa.me/${appConfig.whatsapp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}