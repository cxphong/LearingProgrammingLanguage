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
timer = Timer.scheduledTimer(timeInterval: 3.0, target: self, selector: #selector(self.getConnected), userInfo: nil, repeats: true)
```

```Swift
// stop
if (timer != nil) {
    timer.invalidate()
}
```

```Swift
// Multiple parameter in selector
Timer.scheduledTimer(timeInterval: 1,
                             target: self,
                             selector: #selector(updateSetting),
                             userInfo: ["view":view],
                             repeats: false)


func updateSetting(timer: Timer) {
  let dict = timer.userInfo as! NSDictionary
  let view = dict["view"] as! DashBoardSetting
  view.setupView()
}
```
