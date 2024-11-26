<?php
// Database connection settings
$host = 'localhost';       // Hostname or IP address of the MySQL server
$username = 'root';        // MySQL username (default is 'root' for localhost)
$password = '';            // MySQL password (leave blank for default setup)
$database = 'quickpark_db';   // Name of the database

// Create a new MySQLi connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Connection successful
// echo "Connected successfully"; // Uncomment for debugging
?>
