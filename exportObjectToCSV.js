const referenceDir = './data/requiredFileFolder';
var fs = require('fs'); 
let product = process.argv[2].toString(); //taking product as input from command line
console.log(product)

//this function converts the data into the format that we want in the csv file (separating columns and rows)
function convertToCSV(objArray) {
    var line = 'HEADER1' + ',' + 'HEADER2' + ',' + 'HEADER3' + '\r\n';
    for (var index in objArray){
      line += index + ',' + objArray[index] + '\r\n';
      }
return line;
} 
fs.readFile(`${referenceDir}/${product}.json`, 'utf8', function(err,data){ 
      let responseObject = JSON.parse(data)
      let result = printPathAndValue(responseObject, ""); 
      var fs = require('fs');
      dataToWrite = convertToCSV(result);
      fs.writeFile(`./${product}_file.csv`, dataToWrite, 'utf8', function(err){
          if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
          } else{
          console.log('It\'s saved!');
          }
      }); 
if(err){
throw err;
}
}); 
let finalObj = {};
//This function will form the json path for the correesponding value
let printPathAndValue = (obj, parent) => {
      for(let key in obj){
        if(typeof obj[key] === "object"){
          if(parent != ""){
            printPathAndValue(obj[key], parent + "." + key);
            }
          else{
          printPathAndValue(obj[key],key) 
          }
      }
        else {
          if(parent != ""){
            finalObj[parent + "." + key] = obj[key];
          }
          else{
            finalObj[key] = obj[key];
          }
        }
      }
return finalObj;
}
