<?php
    header('Access-Control-Allow-Origin: http://localhost:63342');
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $stringm = $_POST['message'];
    $tennisArray = array('Mensaje' => $stringm );
    echo json_encode($tennisArray);
    

?>