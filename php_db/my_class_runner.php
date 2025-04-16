<?php
require_once('Myclass.php');

$myClass = new MyClass();

// $myClass->myProperty = 'Hello';
$myClass->setMyProperty('Hello');
echo $myClass->getMyProperty();