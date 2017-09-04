##### Initialize
```swift
// Declare in head of 1 class
enum FioTManagerException : Error {
    case CharacteristicNotExist
    case UsingIncorrectFunction
    case ConnectIncorrectState(currentState : CBPeripheralState)
}
```

##### Throw
```Swift
func connect() throws {
  if (self.device.peripheral.state == .disconnected) {
      self.ble.delegates.add(self)
      self.ble.connect(self.device.peripheral)
  } else {
      throw FioTManagerException.ConnectIncorrectState(currentState: self.device.peripheral.state)
  }
}
```

##### Handling

```Swift
do {
  try f.connect()
} catch FioTManagerException.ConnectIncorrectState(let currentState) {
  print ("Exception ConnectIncorrectState, current state = \(currentState.rawValue)")
} catch {
    
}

```

##### Make sure 1 operation always be called
```Swift
func processFile(filename: String) throws {
  if exists(filename) {
    let file = open(filename)

    defer {
        close(file)
    }
    while let line = try file.readline() {
        // Work with the file.
    }
    // close(file) is called here, at the end of the scope.
  }
}
```

``` 