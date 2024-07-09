// Arrow Function 

//Role-1

var arrow=(...x)=>{
    
    let sum=0;
    for(let num of x){
        sum= sum + num;
    }
    return sum;
}

  let result= arrow(1,2,3,4,5);
  console.log(result);

  // Role-2
  var arrow=()=>{
    
    return "hellow Utsob";
    
}

  let result= arrow();
  console.log(result);