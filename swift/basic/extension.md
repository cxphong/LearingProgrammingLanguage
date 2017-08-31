#### Declare

```Swift
	// Filename: Int+Math.swift

	extension Int {

	    func square() -> Int {
	        return self * self
	    }

	}
```

#### Usage
```Swift
	print (5.square())
```

### Extension for handle delegate
```Swift
// File: MyViewController.swift

class MyViewController : UIViewController {
	 ...
	func f() {
		// Asign FioTManagerDelegate
		obj.delegate = self
	}
} 

extension MyViewController : FioTManagerDelegate {
  func didConnect() {
      print ("connected")
  }
  
  func didFailConnect() {
      
  }
  
  func didDisconnect() {
      print ("disconnect")
  }
  
  func didReceiveNewData(_ characteristic: CBCharacteristic) {
      
  }
}
```