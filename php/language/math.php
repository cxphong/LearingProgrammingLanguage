<?php
	// Number with comma
	$x = 12345678;
	$x = number_format($x);
	echo $x; # Output = 12,345,678

	// Number digit
	$x = 1.236;
	$x = number_format($x, 2);
	echo $x; # Output = 1.24

?>