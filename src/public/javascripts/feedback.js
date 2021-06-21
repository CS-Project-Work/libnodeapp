function Val(form_data){
    var regex = /bmsce\.ac\.in/;
    if(regex.test(form_data.email.value)==false){
      alert("Only use BMSCE Email ID!");
    }

   var regex1 = /[^A-Za-z]/; 
    if(regex1.test(form_data.fname.value)==true||regex1.test(form_data.lname.value)==true){
      alert("Name should only contain letters!");
    }
    
    if(regex.test(form_data.email.value)==true && (regex1.test(form_data.name.value)!=true && regex1.test(form_data.fname.value)==true||regex1.test(form_data.lname.value)==true)==false){
      alert("Form submitted successfully!");
    }
  }

  function handleSubmit () {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    localStorage.setItem("First Name", fname);
    localStorage.setItem("Last Name", lname); 
    return;
}
  