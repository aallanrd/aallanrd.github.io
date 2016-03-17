<?php

 $nombre  = $_POST['nombre'];
 $telefono  = $_POST['telefono'];
 $ciudad = $_POST['ciudad'];
 $correo= $_POST['correo'];

// Varios destinatarios
$para  = 'developer.aallanrd@gmail.com' . ', '; // atención a la coma
$para .= 'aallanrd@gmail.com';

// título
$titulo = 'Mensaje WebMail';

// mensaje
$mensaje = "
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
  <title>Nuevo Mensaje </title>
</head>
<body >
  <p>Nuevo Mensaje del sitio Web UI Premium!</p>
  <hr>

  <h2>Nombre:  $nombre
  <h3>Email:  $telefono  </h3></h2>
  <h4>Mensaje:  $ciudad </h4>
    <h4>Mensaje:  $correo </h4>

  <hr>
</body>
</html>
";

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'To: Allan <allanjose91@gmail.com>,   ALlan<aallanrd@gmail.com>' . "\r\n";
$cabeceras .= 'From: AllanRD <aallanrd@gmail.com>' . "\r\n";
$cabeceras .= 'Cc: allanjose91@gmail.com' . "\r\n";
$cabeceras .= 'Bcc: allanjose91@gmail.com' . "\r\n";

// Enviarlo
mail($para, $titulo, $mensaje, $cabeceras);

header('Location: http://www.aallanrd.com/');
exit;



?>