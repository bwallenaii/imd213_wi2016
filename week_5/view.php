<?php

switch($_GET["page"]){
    case "":
    case "home":
        include("views/home.php");
        break;
    case "about":
        include("views/about.php");
        break;
    case "contact":
        include("views/contact.php");
        break;
    default:
        include("views/404.php");
        break;
}