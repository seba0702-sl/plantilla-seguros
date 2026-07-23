1. appConfig.js
contiene la info del productor
a. actualizar whatsapp, pagina, mail
b. pedir al productor que cree hoja en google sheets excel y me la comparte como editor
c. Cambiar nombre hoja1 a "Cotizaciones", archivo "Cotizaciones"
d. Abrir extenciones -> appScritps y pegar el codigo...:
    "###codigo app scrips###"
const SPREADSHEET_ID = "1x6XdYMt_vSTEyDbxv0g3ALDlUGN9Xm2Gtd307N0o6xM";
const SHEET_NAME = "Cotizaciones";

function doPost(e) {

  try {

    const hoja = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName(SHEET_NAME);

    if (!hoja) {
      throw new Error(`No existe la hoja "${SHEET_NAME}"`);
    }

    const data = JSON.parse(e.postData.contents);

    hoja.appendRow([

      new Date(),

      data.nombre || "",

      data.apellido || "",

      data.dni || "",

      data.telefono || "",

      data.email || "",

      data.marca || "",

      data.modelo || "",

      data.anio || "",

      data.patente || "",

      data.cobertura || "",

      data.observaciones || ""

    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          ok: true
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {

    return ContentService
      .createTextOutput(
        JSON.stringify({
          ok: false,
          error: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  }

}


function doGet() {
  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
e. Implementar aplicacion web en AppScripts y copiar la URL del appScripts
f.pegar la URL en el codigo appConfig.js

2.Como estamos trabajando de manera local, cargamos el repositorio de Git a vercel y ya tenemos la direccion remota para compartir al cliente
 