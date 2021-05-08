<?php
session_start();
?>
<?php
    include_once("dbconfig/config.php");
    $session = $_SESSION['email'];
    if ($session != '') {
        $query = "SELECT * FROM login WHERE email = '{$_SESSION['email']}'";
        $data = mysqli_query($con, $query);
        if(mysqli_num_rows($data) > 0){
            $array = array();
            while($row = mysqli_fetch_assoc($data)){
                array_push($array, $row);
            }
        }
        echo json_encode($array);
    }
?>