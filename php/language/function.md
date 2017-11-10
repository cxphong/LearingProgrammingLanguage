#### 1. **Return multiple value**

```php
<?php


list($a, $b, $c) = tmp();
echo $a;
echo $b;
echo $c;

function tmp()
{
    $a = "ABC\n";
    $b = "DEF\n";
    $c = "GHK";
    return array($a, $b, $c);
}

// output:

// ABC
// DEF
// GHK
```
