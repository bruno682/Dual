// Paste this into Extensions -> Apps Script on the Google Sheet that should
// receive the registrations, then deploy it as a Web App (see instructions
// in the chat / project notes).

var HEADERS = [
    'timestamp',
    'nome_dupla',
    'nivel',
    'categoria',
    'email',
    'telemovel',
    'nome_atleta_1',
    'nome_atleta_2',
    'tshirt_atleta_1',
    'tshirt_atleta_2',
    'nif_atleta_1',
    'nif_atleta_2',
    'subtotal',
    'desconto_tipo',
    'desconto_valor',
    'total'
];

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
    }

    var row = HEADERS.map(function (key) {
        if (key === 'timestamp') {
            return new Date();
        }
        return data[key] !== undefined && data[key] !== null ? data[key] : '';
    });

    sheet.appendRow(row);

    return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
}
