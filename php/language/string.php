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

	// Remove all space
	$phone = preg_replace('/\s+/', '', $phone);

	// Check contain substring
	strpos("1255255", "255", 0) // output is 1
	strpos("1255255", "255", 4) // output is 4
	strpos("1255255", "2555", 4) // output is FALSE
	
	// Remove first 3 characters
	$str = substr($str, 3);

?>
