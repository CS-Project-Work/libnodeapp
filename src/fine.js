function calcfees(form_data){
  var num_days = parseInt(form_data.name1.value)+parseInt(form_data.name2.value)+parseInt(form_data.name3.value);
var fees_per_day = 10;
var fees = num_days*fees_per_day;
alert("Fees to be paid is: " + fees);
}

function numVal(num_label_value){
var regex = /[0-9]{1,}/;
if(regex.test(num_label_value)==true&&letterVal(num_label_value)==false){
  return true;
}
else{
  return false;
}
}

function letterVal(num_label_value){
var regex=/[a-zA-Z*&?<>|/#@!]{1,}/;
if(regex.test(num_label_value)==true){
  return true;
}
else{
  return false;
}
}

function validation(form_data){  if(numVal(form_data.name1.value)&&numVal(form_data.name2.value)&&numVal(form_data.name3.value)){
  alert("All entered data is valid! Calculating fine...")
  calcfees(form_data);
  window.location.href="fine.html";
}
else{
  alert("Only enter numbers!");
  window.location.href="fine.html";
}
}