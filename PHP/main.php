<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Adresse e-mail de destination
    $to = "hugo.creneau@etu.uca.fr";

    // Sujet de l'e-mail
    $email_subject = "New Contact Form Submission: $subject";

    // Contenu de l'e-mail
    $email_body = "You have received a new message from $name ($email):\n\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    echo "<script>alert('Votre message n'a pas été envoyé car ce site n'est pas relié à un serveur de messagerie. Contactez l'adresse hugo.creneau@etu.uca.fr pour plus d'informations.');</script>";
}
?>
