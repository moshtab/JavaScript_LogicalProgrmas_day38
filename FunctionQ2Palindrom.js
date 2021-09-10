const prompt = require('prompt-sync')();
let number = prompt('Enter a number : ');
let temp=number;
palindrome(number);
function palindrome(number){
    let reverse =0;
    while(number!=0){
        let remainder = number%10;
        reverse=(reverse*10)+remainder;
        number=parseInt(number/10);
    }
    console.log(reverse);
    if(temp==reverse){
        console.log("Number is Palindrome");
    }else{
        console.log("Number is not a Palindrome")
    }
}