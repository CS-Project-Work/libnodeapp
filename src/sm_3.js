function inc(i){
    var stock =  parseInt(document.getElementById("stock"+i).innerHTML);
    var final_ans = (stock+1).toString(); 
    document.getElementById("stock"+i).innerHTML = final_ans; 
   }
   
   function dec(i){
    var stock =  parseInt(document.getElementById("stock"+i).innerHTML);
    if(stock<=0){
      var final_ans = 0;
    }
    else{
      var final_ans = (stock-1); 
    }
    document.getElementById("stock"+i).innerHTML = final_ans.toString(); 
   }
   