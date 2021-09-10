let sum=0;
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*90)+10; 
    console.log(num);
    sum=sum+num;
}

console.log("Sum is :"+sum);
let avg = sum/5;
console.log("Avg is :"+avg);