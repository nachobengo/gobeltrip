setTimeout(function(){
	$('#modal_popup').modal('show');
}, 500)

setTimeout(function() {
	$('#modal_popup').modal('toggle');
}, 3000);

$(document).ready(function(){

	/* TRANSPORTE */
	$("#listo_avion").click(function(){
	$(".collapse#collapseAvion").collapse('hide');
	});
	$("#listo_tren").click(function(){
	$(".collapse#collapseTren").collapse('hide');
	});
	$("#listo_bus").click(function(){
	$(".collapse#collapseTren").collapse('hide');
	});

	/* ALOJAMIENTO */
	$("#listo_hotel").click(function(){
	$(".collapse#collapseHotel").collapse('hide');
	});
	$("#listo_apart").click(function(){
	$(".collapse#collapseApart").collapse('hide');
	});
	$("#listo_hostal").click(function(){
	$(".collapse#collapseHostal").collapse('hide');
	});

	/* COMIDA */
	$("#listo_restaurant").click(function(){
	$(".collapse#collapseRestaurant").collapse('hide');
	});
	$("#listo_pizza").click(function(){
	$(".collapse#collapsePizza").collapse('hide');
	});
	$("#listo_hamburguesa").click(function(){
	$(".collapse#collapseHamburguesa").collapse('hide');
	});


	/* OCIO */
	$("#listo_museo").click(function(){
	$(".collapse#collapseMuseo").collapse('hide');
	});
	$("#listo_actividades").click(function(){
	$(".collapse#collapseActividades").collapse('hide');
	});
	$("#listo_tours").click(function(){
	$(".collapse#collapseTours").collapse('hide');
	});

});

	

		



    

	



	