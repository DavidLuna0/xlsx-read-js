const xlsx = require('xlsx');
const obj = {};
var workbook = xlsx.readFile('./src/Base99.xlsx');
var worksheets = workbook.SheetNames;
const contadorAux = 0;
const contador = 6;
const arrayNomes = [];
const arrayFuncional = [];
worksheets.forEach(element => {
    const rows = workbook.Sheets[element];
    for (var key in rows) {
        if (key.substring(0, 1) == 'A') {
            if(rows[key].v.toString().includes(",79")) {
                const array = rows[key].v.split(',');
                arrayNomes.push(array[0]);  
                arrayFuncional.push(array[1]);
            }
        }

        if()
    }
});





