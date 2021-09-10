let max =0;
let min =1000;
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*900)+100; 
    console.log(num);
    if(num>max){
        max =num;
    }
    if(num<min){
        min=num;
    }
}
console.log("Max is :"+max);
console.log("Min is :"+min);
