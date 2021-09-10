let arr =[0,1,2,3,4];
let number;
primeNumber(arr);
function primeNumber(arr){
    for(let j=0;j<arr.length;j++){
        console.log(arr[j])
        number = arr[j];
         
for(let i=2;i<number;i++){
    if(number%i==0){
        console.log("Number is not Prime");
        return;
    }
}
    
     
if(number>=2){
    console.log("Number is Prime \n");
}
else{
    console.log("Number is Not Prime \n");
}
}
}
