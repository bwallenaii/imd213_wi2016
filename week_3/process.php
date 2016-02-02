<?php

$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

$message = "";

foreach($data as $name => $value){
    if(is_array($value)){
        $message .= $name.": ".implode(", ", $value)."<br />\r\n";
    }
    else{
        $message .= "$name: $value <br \>\r\n";
    }
}
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
mail("bwallen.aii@gmail.com", "Form Data From My Site", $message, $headers);
?><html>
    <head>
        
    </head>
    <body>
        <h1>
            Thanks! We can now sell your email address for monies!
        </h1>
    </body>
</html>