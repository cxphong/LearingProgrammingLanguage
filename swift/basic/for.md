```swift
var someInts:[Int] = [10, 20, 30]

for index in someInts {
   println( "Value of  index is \(index)")
}
```

```Swift
// i = 0,0,1,..., 0.9
for i in stride(from: 0.0, to: 1.0, by: 0.1) {
    self.progress = 1.0
    self.layoutSubviews()
    print("scroll to bottom")
}
```

```Swift
// i = 0,0,1,..., 1.0
for i in stride(from: 0.0, through: 1.0, by: 0.1) {
    self.progress = 1.0
    self.layoutSubviews()
    print("scroll to bottom")
}
```

```Swift
// 0, 1, 2, 3, 4, 5
for index in 0...5 {
   NSLog("index \(index)")
}
```
