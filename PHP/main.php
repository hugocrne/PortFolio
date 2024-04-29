<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "hugo.creneau@etu.uca.fr";

    $email_subject = "New Contact Form Submission: $subject";

    $email_body = "You have received a new message from $name ($email):\n\n$message";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    echo "<script>alert('Votre message n'a pas été envoyé car ce site n'est pas relié à un serveur de messagerie. Contactez l'adresse hugo.creneau@etu.uca.fr pour plus d'informations.');</script>";
}
?>
