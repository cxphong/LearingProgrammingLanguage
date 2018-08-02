<?php
	$date = date('Y-m-d H:i:s');

	// Day diff 
	$diff = date_diff($date1,$date2); //+272 days
	$diff->days // positive
	$diff->invert // 0: posstive, 1: negative

	// Convert time format
	$token_end_date = date("d.m.Y", strtotime($device->token_end_date));
?>
