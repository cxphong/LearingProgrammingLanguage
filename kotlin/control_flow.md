```Kotlin
  // If

  // no ternary operator (condition ? then : else)
  val max = if (a > b) {
    print("Choose a")
    a
  } else {
    print("Choose b")
    b
  }
```

```kotlin
// for loop
for (i in 1..4) print(i) // prints "1234"
for (item in collection) print(item)
```
```kotlin
//when <=> switch-case
var x = 2
when (x) {
    1 -> println("x == 1")
    2 -> println("x == 2")
    else -> { // Note the block
        println("x is neither 1 nor 2")
    }
}     
```
