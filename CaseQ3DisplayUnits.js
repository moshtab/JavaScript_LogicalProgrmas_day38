const prompt = require('prompt-sync')();
const number = prompt('Enter Number for display unit : ');
console.log(`${number}`);
let numLength = number.length;
switch(numLength){
    case 1:
        console.log(`Unit`);
        break;
    case 2:
        console.log(`Ten`);
        break;  
    case 3:
        console.log(`Hundred`);
        break;
    case 4:
        console.log(`Thousand`);
        break; 
    case 5:
        console.log(`Ten Thousand`);
        break;
    case 6:
    console.log(`Hundred Thousand`);
    break;
    case 7:
    console.log(`Millions`);
    break;
    default:
        console.log(`Invalid number`);
}