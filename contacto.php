<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$name = $_POST["name"];
$lastName = $_POST["lastName"];
$cellphone = $_POST["cellphone"];
$email = $_POST["email"];
$city = $_POST["city"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$body = <<<HTML
    <h2>Contacto desde la web</h2>
    <h5>Consulta enviada por:</h5> <p>$name $lastName / $email</p>
    <h5>Número de celular/teléfono:</h5> <p>$cellphone</p>
    <h5>Ciudad:</h5> <p>$city</p>
    <h2>Mensaje</h2>
    $message
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $email, "$name $lastName" );
$mailer->addAddress('ads.construccionpampeana@gmail.com','ADS Construcción en Seco');
$mailer->Subject = "Mensaje web: $subject";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';


$message = "Consulta enviada por " . $name . " \r\n";
$message .= "Desde el e-mail " . $email . " \r\n";
$message .= "Celular de contacto: " . $cellphone . " \r\n";
$message .= "Ciudad: " . $city . " \r\n";
$message .= "Asunto: " . $subject . " \r\n";
$message .= "Consulta: " . $_POST['message'] . " \r\n";

$rta = $mailer->send( );

header('Location: gracias.html');

?>