<?php
	$destination = explode("_", $_FILES['file']['name'])[0];

	if (!file_exists($destination)) {
	    mkdir($destination, 0777);
	}

	move_uploaded_file( $_FILES['file']['tmp_name'] , $destination."/".$_FILES['file']['name']);

	$return_object = new stdClass();
	$return_object->ok =  $destination;
	echo json_encode($return_object);
?>