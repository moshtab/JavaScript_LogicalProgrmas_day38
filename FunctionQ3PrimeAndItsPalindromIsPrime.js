const prompt = require('prompt-sync')();
const number = prompt('Enter a Number : ');
primeNumber(number);
function primeNumber(number){
for(let i=2;i<number;i++){
    if(number%i==0){
        console.log("Number is not Prime");
        return;
    }
}
if(number>=2){
    console.log("Number is Prime")
    
}
else{
    console.log("Number is Not Prime")
}
}
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
        primeNumber(temp);
    }else{
        console.log("Number is not a Palindrome")
    }
}