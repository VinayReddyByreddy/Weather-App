<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:4200'); // Replace this with the origin of your frontend application
header('Access-Control-Allow-Methods: POST'); // Allow only POST requests
header('Access-Control-Allow-Headers: Content-Type'); // Allow only Content-Type header

require_once './db_config.php';

$response = array();

// Read POST data
$postData = json_decode(file_get_contents("php://input"), true);

if (isset($postData['x_axis']) && isset($postData['y_axis']) && isset($postData['location'])) {
    $x_axis = $postData['x_axis'];
    $y_axis = $postData['y_axis'];
    $location = $postData['location'];

    // Insert location into database
    $sql = "INSERT INTO locations (x_axis, y_axis, location_name) VALUES ('$x_axis', '$y_axis', '$location')";
    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
        $response['message'] = "Location added successfully";
    } else {
        $response['success'] = false;
        $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    $response['success'] = false;
    $response['message'] = "Incomplete data received";
}

echo json_encode($response);

$conn->close();
?>
