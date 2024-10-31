<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "hugo.creneau@etu.uca.fr";
    
    $mail_subject = "Message de $name : $subject";
    
    $mail_message = "
    Nom : $name\n
    Email : $email\n
    Sujet : $subject\n\n
    Message :\n$message
    ";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $mail_subject, $mail_message, $headers)) {
        echo "Votre message a été envoyé avec succès !";
    } else {
        echo "Échec de l'envoi du message. Veuillez réessayer plus tard.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
