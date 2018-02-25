$(document).ready(function() {
	$(".ok").click(function () {
		console.log('hola');
		$(".cookies").hide();
	});

	$(".muro-iconos").hide();

	$(".foto").mouseenter(function(){
		$(".muro-iconos").show();

	});

	$(".foto").mouseleave(function(){
		$(".muro-iconos").hide();

	});

})

