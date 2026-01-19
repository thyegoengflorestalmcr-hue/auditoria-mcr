function doPost(e) {
  // Get the data from the POST request
  var photoUrl = e.parameter.photoUrl;
  var metadata = e.parameter.metadata;

  // Open the Google Sheets file
  var spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  var sheet = spreadsheet.getActiveSheet();

  // Append the data to the sheet
  sheet.appendRow([new Date(), photoUrl, metadata]);

  // Optionally save the image to Google Drive
  if (e.parameter.saveImage === 'true') {
    var response = UrlFetchApp.fetch(photoUrl);
    var blob = response.getBlob();
    var file = DriveApp.createFile(blob);
    return ContentService.createTextOutput('Image saved: ' + file.getUrl());
  }

  return ContentService.createTextOutput('Data inserted successfully.');
}

function doGet(e) {
  return ContentService.createTextOutput('This endpoint accepts POST requests only.');
}