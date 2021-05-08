<?php
include_once("dbconfig/config.php");
if (isset($_POST['save'])) { 
   
    $filename = $_FILES['myfile']['name'];

    
    $destination = 'uploads/' . $filename;

    
    $extension = pathinfo($filename, PATHINFO_EXTENSION);

    
    $file = $_FILES['myfile']['tmp_name'];
    $size = $_FILES['myfile']['size'];

    if (!in_array($extension, ['zip', 'pdf', 'docx'])) {
        echo "You file extension must be .zip, .pdf or .docx";
    } elseif ($_FILES['myfile']['size'] > 1000000) { 
        echo "File too large!";
    } else {
       
        if (move_uploaded_file($file, $destination)) {
            $sql = "INSERT INTO files (name, size, downloads) VALUES ($filename, $size, 0)";
            if (mysqli_query($con, $sql)) {
                echo "File uploaded successfully";
            }
        } else {
            echo "Failed to upload file.";
            print_r($_FILES);
        }
    }
}


?>
