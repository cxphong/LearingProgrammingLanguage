<?php

	// array with key - value
	$array = array(
    	"foo" => "bar",
    	"bar" => "foo",
	);

	foreach ($array as $key => $value) {
		printf("%s %s\n", $key, $value);
	}

	$array["foo"] = "xxx";
	foreach ($array as $key => $value) {
		printf("%s %s\n", $key, $value);
	}

	// normal array
	$a = array(1,2,3,4,5);

	foreach ($a as $key => $value) {
		printf("%d\n", $value);
	}
	printf("\n");

	// Copy
	$b = array();
	$b = $a;

	foreach ($b as $key => $value) {
		printf("%d\n", $value);
	}

	// Length
	printf("Count = %d\n", count($array));

	// Check contains
	<?php
		$os = array("Mac", "NT", "Irix", "Linux");
		if (in_array("Irix", $os)) {
		    echo "Got Irix";
		}
		if (in_array("mac", $os)) {
		    echo "Got mac";
		}
	?>

?>