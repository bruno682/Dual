// Google Apps Script Web App URL that receives the registration data
// and appends it as a row in a Google Sheet.
var GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwnNCpwMDTEUEPrwqK_DUOU53r8TDb1y86GDtVpu5jXja8TPCqxxAJJ-vZhawBerzAWuA/exec';

function submitToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
}
