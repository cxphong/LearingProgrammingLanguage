##### String to json
```php
// Single
json_decode(str, true)

// array
$data = "[{\"institution\":\"1\",\"disbursed_amount\":\"1\",\"disbursed_date\":\"1\",\"borrower_name\":\"\",\"type_of_facility\":\"\",\"monthly_pay\":\"\",\"collateral\":\"\",\"arrears_days\":\"\"}]";

$array = json_decode( $data, true );

foreach ($array as $key => $value) {
  	echo('key = '.$key . ', value = '. $value["institution"]);
}

```

##### Json to string 
```php
json_encode(js)
```

##### Object to json
```php
json_encode(obj)
```

##### Merge json
```php
array_merge(js1, js2)
```


