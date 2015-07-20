var serviceURL = "http://mascotasmimosas.com/appmascotasmimosasfinal/services/";

var mascotas;
var mascotas2;
var mascotas3;
var claseIcono;
var dirurl;

//PARA CARGAR LAS MASCOTAS DE ENTRADA SIN FILTRO
$('#verMascotas').bind('pageinit', function(event) {
	getMascotasIndex();
});

$('#perros').bind('pageinit', function(event) {
	getMascotasList();
});
$('#mostrarPerros').click(function(event) {
	getMascotasList();
});

$('#gatos').bind('pageinit', function(event) {
	getMascotasListGatos();
});

$('#mostrarGatos').click(function(event) {
	getMascotasListGatos();
});

$('#perros_cachorros').click(function(event) {
	getMascotasListFiltrosPerros("getperroscachorros.php");
});
$('#perros_pequenos').click(function(event) {
	getMascotasListFiltrosPerros("getperrospequenos.php");
});
$('#perros_medianos').click(function(event) {
	getMascotasListFiltrosPerros("getperrosmedianos.php");
});
$('#perros_grandes').click(function(event) {
	getMascotasListFiltrosPerros("getperrosgrandes.php");
});
$('#gatos_cachorros').click(function(event) {
	getMascotasListFiltrosGatos("getgatoscachorros.php");
});
$('#gatos_pequenos').click(function(event) {
	getMascotasListFiltrosGatos("getgatospequenos.php");
});
$('#gatos_medianos').click(function(event) {
	getMascotasListFiltrosGatos("getgatosmedianos.php");
});
$('#gatos_grandes').click(function(event) {
	getMascotasListFiltrosGatos("getgatosgrandes.php");
});

function getMascotasIndex() {
    //alert ("Entro funcion");
	$.getJSON(serviceURL + 'getmascotasindex.php', function(data) {
		$('#listado_mascotas li').remove();
		mascotas = data.items;
		$.each(mascotas, function(index, mascota) {
			if (mascota.idTipoMascota == 1) {
				claseIcono = "iconPerro.png";
			}else{
				claseIcono = "iconGato.png";
			}
			;
			$('#listado_mascotas').append
			('<li class="mascota"><img class="fotoMini" src="http://mascotasmimosas.com/imagenessubidas/' + mascota.foto + '"/>' + '<a class="no_shadow" data-transition="none" href="ficha.html?idMascota=' + mascota.idMascota +'"><h2">'+ mascota.nombre + '&nbsp;&nbsp;&nbsp;&nbsp;</h2><img src="imgApp/' + claseIcono + '"/>'+
					'<p>' + mascota.edad + ' - ' + mascota.descripcionEs+'</p>'+
				'</a></li>');
			});
		$('#listado_mascotas').listview('refresh');
		});
}


function getMascotasList() {
    //alert ("Entro funcion");
	$.getJSON(serviceURL + 'getmascotas.php', function(data) {
		$('#listado_mascotas2 li').remove();
		mascotas2 = data.items;
		$.each(mascotas2, function(index, mascota) {
			$('#listado_mascotas2').append
			('<li class="mascota"><img class="fotoMini" src="http://mascotasmimosas.com/imagenessubidas/' + mascota.foto + '"/>' + '<a class="no_shadow" data-transition="none" href="ficha.html?idMascota=' + mascota.idMascota +'">'+
					'<h2>'+ mascota.nombre + '</h2>'+
					'<p>' + mascota.edad + ' - ' + mascota.descripcionEs+'</p>'+
				'</a></li>');
			});
		$('#listado_mascotas2').listview('refresh');
		});
}

function getMascotasListFiltrosPerros(dirurl) {
    //alert ("Entro funcion");
	$.getJSON(serviceURL + dirurl , function(data) {
		$('#listado_mascotas2 li').remove();
		mascotas2 = data.items;
		$.each(mascotas2, function(index, mascota) {
			$('#listado_mascotas2').append
			('<li class="mascota"><img class="fotoMini" src="http://mascotasmimosas.com/imagenessubidas/' + mascota.foto + '"/>' + '<a class="no_shadow" data-transition="none" href="ficha.html?idMascota=' + mascota.idMascota +'">'+
					'<h2>'+ mascota.nombre + '</h2>'+
					'<p>' + mascota.edad + ' - ' + mascota.descripcionEs+'</p>'+
				'</a></li>');
			});
		$('#listado_mascotas2').listview('refresh');
		});
}

function getMascotasListFiltrosGatos(dirurl) {
    //alert ("Entro funcion");
	$.getJSON(serviceURL + dirurl , function(data) {
		$('#listado_mascotas3 li').remove();
		mascotas3 = data.items;
		$.each(mascotas3, function(index, mascota) {
			$('#listado_mascotas3').append
			('<li class="mascota"><img class="fotoMini" src="http://mascotasmimosas.com/imagenessubidas/' + mascota.foto + '"/>' + '<a class="no_shadow" data-transition="none" href="ficha.html?idMascota=' + mascota.idMascota +'">'+
					'<h2>'+ mascota.nombre + '</h2>'+
					'<p>' + mascota.edad + ' - ' + mascota.descripcionEs+'</p>'+
				'</a></li>');
			});
		$('#listado_mascotas3').listview('refresh');
		});
}

function getMascotasListGatos() {
    //alert ("Entro funcion gatos");
	$.getJSON(serviceURL + 'getmascotasgatos.php', function(data) {
		$('#listado_mascotas3 li').remove();
		mascotas3 = data.items;
		$.each(mascotas3, function(index, mascota) {
			$('#listado_mascotas3').append
			('<li class="mascota"><img class="fotoMini" src="http://mascotasmimosas.com/imagenessubidas/' + mascota.foto + '"/>' + '<a class="no_shadow" data-transition="none" href="ficha.html?idMascota=' + mascota.idMascota +'">'+
					'<h2>'+ mascota.nombre + '</h2>'+
					'<p>' + mascota.edad + ' - ' + mascota.descripcionEs+'</p>'+
				'</a></li>');
			});
		$('#listado_mascotas3').listview('refresh');
		});
}




/*('<li><a href="employeedetails.html?id=' + mascota.idMasctota + '">' +
					'<img src="pics/' + mascota.foto + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');*/
					
					/*<li class="mascota">
				<a class="no_shadow" data-transition="none" href="#ficha">
					<img class="foto_chica" src="imgApp/roque.jpg" alt="Roque" />
					<h2>Roque</h2>
					<p>8 años - El campito</p>
				</a>
</li>*/

//IMAGEN QUE SAQUE PORQUE TODAVIA NO ESTAN '<img class="foto_chica" src="imgApp/'+ mascota.foto + '" alt="Roque" />'+