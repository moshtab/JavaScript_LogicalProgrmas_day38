let i=0;
let headsCounts=0;
let tailsCounts=0;
while(i<23){
    let rNumber = Math.floor(Math.random()*2);
    if(rNumber==0){
        headsCounts++
      
    }else{
        tailsCounts++
    }
    i++;
}
if(headsCounts>=11){
    console.log("Heads won :"+headsCounts);
}else{
    console.log("Tails won :"+tailsCounts);
}