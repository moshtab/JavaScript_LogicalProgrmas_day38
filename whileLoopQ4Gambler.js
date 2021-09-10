let amount =100;
let bets =0;
let wons =0;

while(amount >0 && amount<=200){
    let rNumber = Math.floor(Math.random()*2);
    if(rNumber==0){
        amount=amount-1;
        bets =bets+1;
      
    }else{
        amount=amount+1;
        bets=bets+1;
        wons=wons+1;
    }
    
}if(amount>=200){
console.log("Gamblers reaches to amount :"+amount);
console.log("Bets :"+bets);
console.log("Wons :"+wons);
}else{
console.log("Gamblers reaches to amount :"+amount);
console.log("Bets :"+bets);
}