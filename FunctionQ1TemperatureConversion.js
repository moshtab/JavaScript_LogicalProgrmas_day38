const prompt = require('prompt-sync')();
const number = prompt('Choose 0 for Farenheit and 1 for Celcius conversions : ');
switch(number){
    case "0":{
        degF();
        break;
    }
    case "1":
        degC();
        break;
    default :
    console.log("U entered incorrect option");

}
function degF(){
    const degC = prompt('Enter temperature in  degree celcius(0-100) : ');
    let degF=(degC*9/5)+32;
    console.log("degF"+degF);
}
function degC(){
    const degF = prompt('Enter temperature in  degree farenheit(0-212) : ');
    let degC=(degF-32)*5/9;
    console.log("degC :"+degC);
}