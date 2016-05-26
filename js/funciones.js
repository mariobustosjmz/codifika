$(document).ready(function() {

	$("#enviar").on("click",function( event ) {
		console.log("click e");
		var data_formulario=$("#miformulario").serializeArray();
		console.log(data_formulario);
		event.preventDefault();

		//validaciones -
			$.ajax({
				url: '/php/enviar_correo.php',
				type: 'GET',
				dataType: 'json',
				data: data_formulario ,
			})
			.done(function(data) {
				console.log("success");
				console.log(data);
				console.log(data.return);
				$("#estatus").html("<p>Enviado Correctamente<img src='img/right.svg'></p>");
                $("#estatus").css("color", "#3b323b");
			})
			.fail(function(data) {

				console.log("error");
				$("#estatus_wrong").html("<p>Error, vuelva a intentarlo.</p>");
                $("#estatus_wrong").css("color", "#ff675b");
			})
			.always(function() {
				console.log("complete");
				$("#nombre").val("");
				$("#email").val("");
				$("#mensaje").val("");

			});
	});

});