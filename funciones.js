function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('11r8q0iT2lyDjSW7eBBx2DI4CA-_Y5GoGMPz8bm8ABno').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}