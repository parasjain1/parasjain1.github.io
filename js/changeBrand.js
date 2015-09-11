function changeBrand()
{   
    var brandDiv=document.getElementById("brand");
	if(brandDiv.title="en") {
		brandDiv.title="hi";
		brandDiv.innerHTML="<a class='navbar-brand' style='font-family:verdana;' href='#'>हंसराज कॉलेज </a>"
		return;
	}
		brandDiv.title="en";
		brandDiv.innerHTML="<a class='navbar-brand' style='font-family:verdana;' href='#'>HANS RAJ COLLEGE</a>"
		
		
}

setInterval(changeBrand,2500);