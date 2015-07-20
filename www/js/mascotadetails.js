var mascotas2;

$('#paginaficha').bind('pageinit', function(event) {
	alert("Entro a la pagina live");
	var id = getUrlVars()["idMascota"];
	//alert ("el id es " + id);
	$.getJSON(serviceURL + 'getmascota.php?idMascota='+id, displayMascota);
});

function displayMascota(data) {
	//$('#Nombre').text("HOLAAAA");
	//alert("Entro al display mascota");
	//ACA ESTA EL PROBLEMA
	mascotas2 = data.items;
	$.each(mascotas2, function(index, mascota) {
	//var mascota = data.item;
		console.log(mascota);
		$('#imagenMascota').attr('src', 'http://mascotasmimosas.com/mascotasmimosasadmin/imagenessubidas/' + mascota.foto);
		$('#Nombre').text(mascota.nombre);
		//alert("el nombre de la mascota es");
		$('#Edad').text(mascota.edad + ' años');
		$('#Descripcion').text(mascota.descripcionEs);
		$('#adoptar').attr('href', 'http://mascotasmimosas.com/mascota/' + mascota.idMascota+'/'+mascota.nombre);
	});
	
}

function getUrlVars() {
	//alert("entro al get urls vars");
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    //alert("Que tiene vars: " + vars);
    return vars;
}
