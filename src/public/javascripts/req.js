function Val(form_data){
    var regex = /bmsce\.ac\.in/;
    if(regex.test(form_data.email.value)==false){
      alert("Only use BMSCE Email ID!");
    }
  
   var regex1 = /[^A-Za-z\s]/; 
    if((regex1.test(form_data.name.value)==true||regex1.test(form_data.bname.value)==true)||regex1.test(form_data.aname.value)==true){
      alert("Name should only contain letters!");
    }
    

    if(regex.test(form_data.email.value)==true && (regex1.test(form_data.name.value)==true||regex1.test(form_data.bname.value)==true||regex1.test(form_data.aname.value)==true)==false){
      alert("Form submitted successfully!!!");
    }

  }
  
  
  