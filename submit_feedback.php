<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Set your email address where you want to receive feedback emails.
    $toEmail = "mmanzana.prince8@gmail.com";

    // Subject of the email.
    $emailSubject = "Feedback from Find Your Inspiration Website";

    // Email content.
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message";

    // Email headers.
    $headers = "From: $name <$email>";

    // Send the email.
    if (mail($toEmail, $emailSubject, $emailBody, $headers)) {
        // Email sent successfully.
        $response = array("status" => "success", "message" => "Thank you for your feedback! We will get back to you soon.");
    } else {
        // Failed to send email.
        $response = array("status" => "error", "message" => "Oops! Something went wrong. Please try again later.");
    }

    // Return JSON response.
    echo json_encode($response);
} else {
    // If the request method is not POST.
    http_response_code(403); // Forbidden
    echo json_encode(array("status" => "error", "message" => "Access forbidden."));
}
?>
