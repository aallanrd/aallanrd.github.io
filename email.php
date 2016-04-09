<?php
$to = "info@aallanrd.com, aallanrd@gmail.com";
$subject = "HTML email from site";

$name= $_POST['nombre'];
$email= $_POST['email'];
$mess= $_POST['mensaje'];

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email"+ $name +" contains HTML Tags!</p>

</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@aallanrd.com>' . "\r\n";
$headers .= 'Cc: aallanrd@gmail.com' . "\r\n";

mail($to,$subject,$message,$headers);

echo "Sended";
?>