<?php

if (isset($_GET["nombre"])) {

	$nombre = $_GET["nombre"];
	$correo = $_GET["correo"];
	$mensaje = $_GET["asunto"];

	$destinatario = "administracion@codifika.mx";
	$asunto = "::Contacto Codifika::";

//solo css incrustado como style
	$cuerpo = '
		<html>
		<head>
		</head>
		<body>
		<h1>' . $nombre . ' </h1>
		<h3>' . $correo . ' </h3>
		<p>
		<i>' . $mensaje . '</i>
		</p>
		</body>
		</html>
		';

	//enviar como html
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

	$headers .= "From: " . $nombre . "<" . $correo . ">\r\n";
	$headers .= "Reply-To:: " . $nombre . "<" . $correo . ">\r\n";
	$headers .= "Cc: mariobustosjmz@gmail.com\r\n";

	if (mail($destinatario, $asunto, $cuerpo, $headers)) {
		$return = "correcto";
	} else {
		$return = "error";
	}

	//data de retorno
	$data[] = array('return' => $return,
		'test_2' => $correo);

	echo json_encode($data, JSON_PRETTY_PRINT);

}

?>