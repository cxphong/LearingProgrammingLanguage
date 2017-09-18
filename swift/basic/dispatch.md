##### Main UI
```swift
	DispatchQueue.main.async {
		// code
	}
```


#### Thread
```swift
DispatchQueue.global(qos: .background).async {
  print("This is run on the background queue")

  DispatchQueue.main.async {
     print("This is run on the main queue, after the previous code in outer block")
  }
}
```