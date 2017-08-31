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