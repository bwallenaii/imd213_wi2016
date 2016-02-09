<?php

$person = (Object) [
    "name" => "Fred",
    "age" => 32
];

$people[] = $person;

$person = new StdClass();
$person->name = "Barney";
$person->age = 30;

$people[] = $person;

echo json_encode($people);