const prompt = require("prompt-sync")();
let num = prompt('Enter a number 1 or 10 or 100...... :');
console.log(`${num}`);
if(num==1)
console.log("units");
else if(num==10)
console.log("Tens");
else if(num==100)
console.log("Hundreds");
else if(num==1000)
console.log("Thousands");
else if(num==10000)
console.log("Tenthousands");
else if(num==100000)
console.log("Hundrethousands");
else if(num==1000000)
console.log("Millions");
else
console.log("U have entered incorrect number");
