```kotlin
// Initialize, docs: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html
var array : IntArray = intArrayOf(1,2,3,4)
var array : IntArray = IntArray(2)
array[1] = 55
println(array[0]);
println(array[1]);
```

```kotlin
// Iteration
for (e in array) {
  println(e)
}
```

```kotlin
// size
println(array.size)

// get
println(array.get(0))

// set
array.set(0,22)
println(array.get(0))
```
