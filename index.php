<?php
error_reporting(-1);
ini_set('display_errors', 'On');

$pdo = new PDO(
    'mysql:host=localhost;dbname=marjolein',
    'marjolein', // Set this to your mysql username
    '???????' // Set this to your mysql password
    
);

$stmt = $pdo->prepare("SELECT * FROM meetwaarden");
$stmt->execute();
$collection = $stmt->fetchAll();
header("Content-type: text/csv");
header("Content-Disposition: attachment; filename=file.csv");
header("Pragma: no-cache");
header("Expires: 0");

foreach($collection as $row) {
 $i = 0;
 foreach($row as $column) {
 if($i % 2 == 0) echo "$column,";
   $i++;
 }

 echo "\n";
}





