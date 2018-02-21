```swift
// Object
class Device: NSObject, NSCopying {
    var name : String?
    var mac : String?
    var tools : NSMutableArray?
    
    init(name : String?, mac : String?, tools : NSMutableArray?) {
        self.name = name
        self.mac = mac
        self.tools = tools
    }
    
    func copy(with zone: NSZone? = nil) -> Any {
        let device = Device(name: self.name,
                            mac: self.mac,
                            tools: NSMutableArray(array: self.tools as! [Any], copyItems: true))
        return device
    }
    
}
```

```swift
let array = NSMutableArray()
array.add(1)
var device01 = Device(name: "Device01",
                    mac: "1234",
                    tools: array)

var device02 = device01.copy(with: nil) as! Device

device01.mac = "5678"

NSLog("\(device01.mac!) \(device02.mac!)") // 5678 5678
```
