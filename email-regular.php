<?php
// multiple recipients
$to  = 'aallanrd@gmail.com' . ', '; // note the comma
$to .= 'developer.aallanrd@gmail.com';

$nombre =$_POST["nombre"]);

// subject
$subject = 'Mensaje del SItio Web ';

// message
$message = '
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
  <title>Nuevo Mensaje - Plan Regular</title>
</head>
<body>
  <p>Este es el mensaje que han dejado!</p>
  <table>
    <tr>
      <th>Persona</th><th>Info</th><th>Mensaje</th>
    </tr>
    <tr>
      <td>'. $nombre .'</td><td> $_POST["telefono"]) </td><td>$_POST["ciudad"])</td>
    </tr>
    <tr>
      <td>$_POST["correo"])</td>
    </tr>
  </table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";


// Mail it
mail($to, $subject, $message, $headers);
?>