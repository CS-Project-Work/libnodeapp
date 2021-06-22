const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function emailVal(form_data) {
	var regex = /bmsce\.ac\.in/;
	if (regex.test(form_data.email.value) == false) {
		alert("Only use BMSCE Email ID!");
		return false;
	} else {
		alert("Email check successfull!");
		return true;
	}
}

function lettersVal(form_data) {
	var regex1 = /[a-z]./;
	var regex2 = /[A-Z]./;
	if (regex1.test(form_data.password.value) && regex2.test(form_data.password.value)) {
		return true;
	} else {
		return false;
	}
}

function digitsVal(form_data) {
	var regex = /[0-9]./;
	if (regex.test(form_data.password.value)) {
		return true;
	} else {
		return false;
	}
}

function passVal(form_data) {
  if (digitsVal(form_data) && lettersVal(form_data)) {
    alert("Password check successfull!");
    return true;
  } else {
    alert("Error! Set password according to the following requirements: There should be atleast one upper case and one lower case value and a number");
    return false;
  }
}

	function checkPassword(form_data) {
		if (passVal(form_data)) {
			if (form_data.password.value == form_data.confirm.value) {
				alert("Passwords match!");
				return true;
			} else {
        alert("Passwords do not match!")
				return false;
			}
		}
	}

	function checkName(form_data) {
		var regex1 = /[A-Za-z]{0,}/;
		var regex2 = /[0-9]./;
		if (regex1.test(form_data.first_name.value) == true && regex1.test(form_data.last_name.value) == true && regex2.test(form_data.first_name.value) == false && regex2.test(form_data.last_name.value) == false) {
			return true;
		} else {
			alert("Name should only contain letters!");
			return false;
		}
	}


	function checkUSN(form_data) {
		regex = /\dBM\d\dCS\d\d\d/;
		if (regex.test(form_data.usn.value) == false) {
			alert("Wrong USN format. Use *BM*CS***");
			return false;
		} else {
			return true;
		}
	}

	function studValidation(form_data) {
    var name_val = checkName(form_data);
    var usn_val = checkUSN(form_data);
    var email_val = emailVal(form_data);
    var pswd_val = checkPassword(form_data);
		if (name_val && usn_val && email_val && pswd_val) {
			alert("Registration Successful! Please login to access the inventory.");
			window.location.href = "./views/login.ejs";
      return false;
		} else {
			alert("Registration Unsuccessful");
      return false;
		}
	}

	function adminValidation(form_data) {
    var name_val = checkName(form_data);
    var email_val = emailVal(form_data);
    var pswd_val = checkPassword(form_data);
		if (name_val && usn_val && email_val && pswd_val) {
			alert("Registration Successful! Please login to access the inventory.");
			window.location.href = "./views/login.ejs";
      return false;
		} else {
			alert("Registration Unsuccessful");
      return false;
		}
	}