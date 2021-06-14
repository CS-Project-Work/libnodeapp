const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

function emailVal(form_data){
  var regex = /bmsce\.ac\.in/;
  if(regex.test(form_data.email.value)==false){
    alert("Only use BMSCE Email ID!\n Login unsuccessful");
    
  }
  else{
    alert("Email check successfull!");
    window.location.href="admin_das.html";
  return false;
  }
}

function emailVal1(form_data){
  var regex = /bmsce\.ac\.in/;
  if(regex.test(form_data.email.value)==false){
    alert("Only use BMSCE Email ID!\n Login unsuccessful");
    
  }
  else{
    alert("Email check successfull!");
    window.location.href="std_das.html";
  return false;
  }
}
