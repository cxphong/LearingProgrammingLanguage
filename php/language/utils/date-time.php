<?php

	// 'Datetime' to 'String'
	$datetime->format('Y-m-d H:i:s');

	// Now
	$datetime = new DateTime();

	// Day diff 
	$diff = date_diff($date1,$date2); //+272 days
	$diff->days // always positive
	$diff->invert // 0: posstive, 1: negative

	// Convert String to 'Datetime'
	 $report_month = DateTime::createFromFormat('m/Y', '09/2018');

	// 'date' tp string


?>
