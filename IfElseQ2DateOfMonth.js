const prompt = require('prompt-sync')();
let month = prompt('Enter a Month :');
let date = prompt('Enter a date :');
if((month>=3) && (month<=6) && date<=20){
    console.log(true);
}else{
    console.log(false);
}
