function Cancel(i) 
{
var togbutton = document.getElementsByClassName("btn");

if(togbutton[i].innerHTML === "Issue") {
  togbutton[i].innerHTML = "Cancel";
}
else
  {
    togbutton[i].innerHTML = "Issue";
  }

}

function get_count(j){
var button_var = document.getElementsByClassName("btn");
var count_var = parseInt(document.getElementById("count_val").innerHTML);
if(count_var<3&&button_var[j].innerHTML==="Issue"){
  count_var++;
  document.getElementById("count_val").innerHTML = count_var.toString();
}
else if(button_var[j].innerHTML==="Cancel"&&count_var>0){
  count_var--;
  document.getElementById("count_val").innerHTML = count_var.toString();
}
else{
  alert("You have reached the maximum amount of books that are issued to a student!");
  Cancel(j);
}
}
