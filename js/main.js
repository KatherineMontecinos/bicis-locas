function validateForm(){
	var inputname = document.getElementById("name").value;
	var inputlastname = document.getElementById("lastname").value;
	var inputemail = document.getElementById("input-email").value;
	var inputpassword = document.getElementById("input-password").value;
	var listabici = document.querySelector("select").value;

	if( inputname == null || inputname.length == 0 || /^\s+$/.test(inputname) || /^[a-zA-Z]*$/.test(inputname) == false ) {
 		alert("Debe ingresar un nombre");
 		return false;
 	}

 	else if( inputlastname == null || inputlastname.length == 0 || /^\s+$/.test(inputlastname) || /^[a-zA-Z]*$/.test(inputname) == false ) {
 		alert("Debe ingresar un apellido");
 		return false;
 	}

 	else if( inputemail == null || inputemail.length == 0 || /^\s+$/.test(inputemail) || /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(inputemail) == false ) {
 		alert("Debe ingresar un email valido");
 		return false;
 	}
 	else if( inputpassword == null || inputpassword  == 0 || /^\s+$/.test(inputpassword) || inputpassword.length < 6 || /123456/.test(inputpassword) == true || /098754/.test(inputpassword) || /password/.test(inputpassword)) {
 		alert("Debe ingresar un password valido");
 		return false;
 	}
 	else if( listabici == 0 ){
 		alert("Debes seleccionar una opción");
 		return false;
 	}
 	return true;
}
    