function Val(form_data){
    var regex = /bmsce\.ac\.in/;
    if(regex.test(form_data.email.value)==false){
      alert("Only use BMSCE Email ID!");
    }

    var regex1 = /[^A-Za-z\s]/; 
    if(regex1.test(form_data.name.value)==true){
      alert("Name should only contain letters!");
    }
 
   var regex2 = /[^0-9]/; 
    if(regex2.test(form_data.phone.value)==true){
      alert("Phone number should only contain numbers!");
    }
  

    if(regex.test(form_data.email.value)==true && regex1.test(form_data.name.value)!=true && regex2.test(form_data.phone.value)!=true )
    {
    alert("Form submitted successfully!");
  }
  }

