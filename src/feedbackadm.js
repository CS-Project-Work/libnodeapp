window.addEventListener('load', () => {
    const name = localStorage.getItem("First Name");
    const surname = localStorage.getItem("Last Name"); 
   
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-lname').innerHTML = surname;

})