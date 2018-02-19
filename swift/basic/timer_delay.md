#### Delay

```Swift
// Delay 1s
sleep(1)
usleep(1000000) 
nsleep(1000000000)
```

```Swift
DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 5) {
   NSLog("delay")
}
```

```Swift
self.perform(#selector(self.getBrightness), with: self, afterDelay: 2) // Delay 2s

...

@objc func getBrightness() {
    NSLog("getBrightness")
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
