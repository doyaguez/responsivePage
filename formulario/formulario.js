$(document).ready(function() 
{	
	$(".off").css('display', 'none');
    $(".registro").css('display','none');

	$("#reg").on("click", function(){
		$(".registro").css('display','block');
		$(".login").css('display', 'none');
	})

	$("#log").on("click", function(){
		$(".registro").css('display','none');
		$(".login").css('display', 'block');
	})

	
});

var form= document.forms["form"];

form["email"].addEventListener("keyup",function(){

var expresionEm=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/g;


if(!expresionEm.test(form["email"].value)){
	form["email"].setCustomValidity("Espero este tipo de email aaaaa@aaaaa.com");
}else{
	form["email"].setCustomValidity("");
}


});

form["nombreAp"].addEventListener("keyup",function() {

	if(form['nombreAp'].value==="" || form['nombreAp'].value===null){
		form['nombreAp'].setCustomValidity("No se puede quedar vacio");
	}else{
		form['nombreAp'].setCustomValidity("");
	}
	
});

form["password"].addEventListener("keyup",function() {
	var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

	if(!regexp_password.test(form["password"].value)){
		form["password"].setCustomValidity("Espero que tenga mayuscula,miniscula,numero, caracter especial");
	}else{
		form["password"].setCustomValidity("");
	}
	
});

form["rePassword"].addEventListener("keyup",function() {
	var confPass =form["rePassword"].value;
	var pass=form["password"].value;

	if(pass!==confPass){
		form["rePassword"].setCustomValidity("comprueba la contraseña, deben coincidir");
	}else{
		form["rePassword"].setCustomValidity("");
	}
	
});

$('.direccion').on('keyup',function() {

	var d = document.getElementsByClassName('direccion')[0].value;

	if(d!=""){
		$(".trj").css('display','unset');
	}else{
		$(".trj").css('display','none');
	}
});

/*	var paises = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
"Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
"Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
"Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
"Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
"Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
"Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
"Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
"Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
"Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
"Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
"Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
"Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
"Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
"Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
"Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
"Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
"Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
"Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
"Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");

	var select = document.getElementsByClassName('country')[0];
	for(let i=0; i<paises.length; i++){
		var opt = document.createElement('option');
		opt.value=paises[i];
		$(opt).text(paises[i]);
		select.appendChild(opt);
	}
   
*/



function validacion(){

	var todo_correcto = true;
	var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
	var contra=document.getElementByClassName('pass')[0].value;
	var passConf=document.getElementsByClassName('rePass')[0].value;
	var mail=document.getElementsByClassName('email')[0].value;

	if(!regexp_password.test(contra) && contra !== passConf){
		 todo_correcto=false;
	}else{
		 todo_correcto;
	}

	if(todo_correcto){
		setCookie(mail, contra);
	}

}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(exdays){
    	 d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   		 var expires = "expires="+d.toUTCString();
    }else{
    	expires="";
    }
   
    document.cookie = cname + "=" +cvalue + ";" + expires + ";path=/";
    alert("Enhorabuena, se ha creado la cookie satifactoriamente.")
    redireccionar();
}




function checkCookie() {
	var listaCookies = document.cookie.split(';');
	var em= document.getElementsByClassName('user')[0].value;
	var pss=document.getElementsByClassName('ps')[0].value;


    for (var i=0; i<listaCookies.length; i++) {
    	var compara= listaCookies[i].search(em+"="+pss);
  		if(compara>-1){
  			alert("Bienvenido  " + em);
  			redireccionar();

  		}else{
  			alert("Comprueba los datos");
  		}
  		
    }
}

function redireccionar() {
setTimeout("location.href='../PaginaWeb/proyecto.html'", 0);}
