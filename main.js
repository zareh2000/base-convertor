const readlineSync = require('readline-sync');
const convertor = require('./convertor');

let binary, hexa;

do 
{
    binary =  convertor.convertToBinary(parseInt(readlineSync.question( "Please input non-negative number you want to convert to binary: " )));
}
while (!binary);

console.log(binary);
 
do 
{
    hexa =  convertor.convertToHexa(parseInt(readlineSync.question( "Please input non-negative number you want to convert to hexadecimal: " )));
}
while (!hexa);

console.log(hexa);