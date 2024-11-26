<?php
// Include the database connection
include('db.php');
include 'backend/db.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert data into the database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
    
    if (mysqli_query($conn, $sql)) {
        // Redirect to the login page or any other page after successful signup
        header("Location: login.php");
        exit();
    } else {
        // Handle error (if any)
        echo "Error: " . mysqli_error($conn);
    }
}
?>
