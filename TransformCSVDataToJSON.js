var fs = require('fs'); 
let product = process.argv[2].toString();
console.log(product)
function convertToJSONStructure(ob) {
const result = {};
for (const i in ob) {
const keys = i.split(".");
keys.reduce((r, e, j) => {
r[e] = r[e] || ((keys.length - 1 === j ? ob[i] : {}));
return r[e];
}, result);
}
return result;
}
function convertToJSONFormat(data){
var arr = data.split(/\r?\n/)
arr.shift()
arr.pop()
let arrObj = {};
arr.forEach((element)=>{
arrObj[element.split(",")[0]] = element.split(",")[1] ;
})
return(convertToJSONStructure(arrObj))
}
fs.readFile(`./${product}.csv`, 'utf8', function(err,data){ 
var fs = require('fs');
dataToWrite = convertToJSONFormat(data);
fs.writeFile(`./${product}.json`, JSON.stringify(dataToWrite,null,2), 'utf8', function(err){
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
