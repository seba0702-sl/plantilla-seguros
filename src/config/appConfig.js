const appConfig = {

  //====================================
  // PRODUCTOR
  //====================================

  producer: {

    name: "Juan Pérez Productor Asesor de Seguros",

    company: "JP Seguros",

    slogan: "Protegé lo que más importa",

    description:
      "Encontramos la mejor cobertura para vos comparando las principales compañías del mercado.",

    logo: "/logo.png",

    hero: "/hero.jpg",

    primaryColor: "#0057B8",

    secondaryColor: "#00AEEF",

  },

  //====================================
  // CONTACTO
  //====================================

  contact: {

    whatsapp: "5491164971485",

    phone: "5491164971485",

    email: "contacto@jpseguros.com.ar",

    address: "Buenos Aires",

    website: "https://jpseguros.com.ar"

  },

  //====================================
  // GOOGLE
  //====================================

  integrations: {

    googleScriptUrl:
      "https://script.google.com/macros/s/AKfycbyBcg5WhNtOjvEw5r98pg9fbzPmA9zVOL49aHlOZNo0BVeaWtcvSBX37c23ruwW8Jg-/exec"

  },

  //====================================
  // REDES
  //====================================

  social: {

    instagram:
      "https://instagram.com/jpseguros",

    facebook:
      "https://facebook.com/jpseguros"

  },

  //====================================
  // ASEGURADORAS
  //====================================

  companies: [

    {
      name: "Federación Patronal",
      logo: "/companias/federacion.png"
    },

    {
      name: "Sancor Seguros",
      logo: "/companias/sancor.png"
    },

    {
      name: "RUS",
      logo: "/companias/rus.png"
    },

    {
      name: "Mercantil Andina",
      logo: "/companias/mercantil.png"
    },

    {
      name: "Allianz",
      logo: "/companias/allianz.png"
    }

  ],
quote:{

        title:"Solicitar Cotización",

        description:
        "Completá los siguientes datos para recibir una cotización personalizada.",

        successMessage:
        "Solicitud enviada correctamente."

    }
};
console.log("APP CONFIG");

console.log(appConfig);

export default appConfig;