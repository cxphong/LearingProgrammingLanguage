<?php
	// Remove quote
	trim($string,'"');

	// Split
	$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
	$pieces = explode(" ", $pizza);
	echo $pieces[0]; // piece1
	echo $pieces[1]; // piece2

	// Append
	$str1 = "ABC";
	$str2 = "DEF";

	$str3 = $str1.$str2;
?>