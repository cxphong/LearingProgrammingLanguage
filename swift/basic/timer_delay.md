#### Delay

```Swift
sleep(4) // Delay 4s
```

```Swift
DispatchQueue.main.after(when: .now() + 10) { // Delay 10s
	// Function
}
```

```Swift
self.perform(#selector(getBrightness), with: self, afterDelay: 2) // Delay 2s

func getBrightness() {
       
}
```

#### Timer

```Swift
// start
let timer = Timer.scheduledTimer(timeInterval: 1.0,
                                         target: self,
                                         selector: #selector(self.xxx(timer:)),
                                         userInfo: 8,
                                         repeats: true)
...

@objc func xxx(timer : Timer) {
	NSLog("Method ... \(timer.userInfo)")
}
```

```Swift
// stop
if (timer != nil) {
    timer.invalidate()
}
```
