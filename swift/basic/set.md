```swift
    // Initialize
    var set1 = Set<Int>()
    var set2 :Set<Int> = [5, 0, 5]

    NSLog("set1 \(set1.count) \(set1.capacity)") // 0 0 
    NSLog("set2 \(set2.count) \(set2.capacity) \(set2.contains(5))") // 2 3

    // i = 5, i = 0
    for i in set2 {
      NSLog("i = \(i)")
    }

    set2.remove(5)

    // set2 1 3 false
    NSLog("set2 \(set2.count) \(set2.capacity) \(set2.contains(5))")

    set2.insert(8)

    // set2 1 3 false
    NSLog("set2 \(set2.count) \(set2.capacity) \(set2.isEmpty)")

    // Empty
    set2 = []

    // set2 0 0 true
    NSLog("set2 \(set2.count) \(set2.capacity) \(set2.isEmpty)")

    let oddDigits: Set = [1, 3, 5, 7, 9]
    let evenDigits: Set = [0, 2, 4, 6, 8]
    let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]

    NSLog("\(oddDigits.union(evenDigits).sorted())")
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    NSLog("\(oddDigits.intersection(evenDigits).sorted())")
    // []
    NSLog("\(oddDigits.subtracting(singleDigitPrimeNumbers).sorted())")
    // [1, 9]
    NSLog("\(oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted())")

    let houseAnimals: Set = ["🐶", "🐱"]
    let farmAnimals: Set = ["🐮", "🐔", "🐑", "🐶", "🐱"]
    let cityAnimals: Set = ["🐦", "🐭"]

    NSLog("\(houseAnimals.isSubset(of: farmAnimals))")
    // true
    NSLog("\(farmAnimals.isSuperset(of: houseAnimals))")
    // true
    NSLog("\(farmAnimals.isDisjoint(with: cityAnimals))")
```
