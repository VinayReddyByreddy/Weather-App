<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:4200'); // Replace this with the origin of your frontend application
header('Access-Control-Allow-Methods: GET'); // Allow only POST requests
header('Access-Control-Allow-Headers: Content-Type'); // Allow only Content-Type header


require_once '../db_config.php';

// Fetch locations from database
$sql = "SELECT * FROM locations";
$result = $conn->query($sql);
$locations = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $locations[] = $row;
    }
    echo json_encode($locations);
} else {
    echo json_encode($locations);
}

$conn->close();
?>
