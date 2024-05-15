<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:4200'); // Replace this with the origin of your frontend application
header('Access-Control-Allow-Methods: POST'); // Allow only POST requests
header('Access-Control-Allow-Headers: Content-Type'); // Allow only Content-Type header

require_once '../db_config.php';

$response = array();
$data = array();

// Read POST data
$postData = json_decode(file_get_contents("php://input"), true);

if (isset($postData['location_id'])) {
    $location_id = $postData['location_id'];
    // Fetch weather information for the specified location
    $sql = "SELECT * FROM locations WHERE id = $location_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $weatherData = $result->fetch_assoc();

        // Extract latitude and longitude from the weather data
        $latitude = $weatherData['x_axis'];
        $longitude = $weatherData['y_axis'];

        // Build the URL dynamically
        $url = "https://api.weather.gov/gridpoints/RNK/$latitude,$longitude/forecast";

        // Initialize cURL
        $curl = curl_init();

        $headers = array(
            'Content-Type: application/json',
            'User-Agent: era-php-coding-exercise', // we can take this from env or constant
        );
        // Set cURL options
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => $headers, // Include headers in the request
        ));
        $weather_response = curl_exec($curl);
        
        // Decode JSON response
        $response_data = json_decode($weather_response, true);

        // Access the 'properties' object and its 'periods' array
        if ($response_data && $response_data['properties']) {
            $periods = $response_data['properties']['periods'];
            $data = [$periods[0]];
        }

        curl_close($curl);
        $response['success'] = true;
        $response['message'] = "Weather data fetched successfully";
        $response['data'] = $data;
    } else {
        $response['success'] = false;
        $response['message'] = "Error: something went wrong";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Incomplete data received";
}

echo json_encode($response);

$conn->close();
