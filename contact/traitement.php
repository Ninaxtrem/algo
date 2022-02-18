<?php
    echo ($_POST["nom"]);
    echo ($_POST["date"]);

    $aujourdhui = date("Y-m-d");
    $diff = date_diff(date_create($_POST["date"]), date_create($aujourdhui));
    echo 'Votre age est '.$diff->format('%y');

    if($diff->format('%y')< 18){
        header('Location: https://www.gulli.fr/');
    }
    else{
        header('Location: https://www.amazon.fr/');
    }
?>