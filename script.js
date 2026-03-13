function doGet() {

const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");
const data = sheet.getDataRange().getValues();

let resultado = [];

for(let i = 1; i < data.length; i++){

resultado.push({
linha: i+1,
departamento: data[i][0],
equipamento: data[i][1],
ativo: data[i][2],
servicetag: data[i][3],
usuario: data[i][4],
data: data[i][5]
});

}

return ContentService
.createTextOutput(JSON.stringify(resultado))
.setMimeType(ContentService.MimeType.JSON);

}



function doPost(e){

const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");

if(e.parameter.acao == "editar"){

const linha = Number(e.parameter.linha);

sheet.getRange(linha,1).setValue(e.parameter.departamento);
sheet.getRange(linha,2).setValue(e.parameter.equipamento);
sheet.getRange(linha,3).setValue(e.parameter.ativo);
sheet.getRange(linha,4).setValue(e.parameter.servicetag);
sheet.getRange(linha,5).setValue(e.parameter.usuario);

return ContentService
.createTextOutput("ok");

}


/* cadastro normal */

sheet.appendRow([
e.parameter.departamento,
e.parameter.equipamento,
e.parameter.ativo,
e.parameter.servicetag,
e.parameter.usuario,
new Date()
]);

return ContentService.createTextOutput("ok");

}