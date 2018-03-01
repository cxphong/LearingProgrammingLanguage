```swift
// Demo how to use
func executeOperation() {
      let block = BlockOperation {
          for index in 0...1000 {
              NSLog("index \(index)")
          }

          // Run on ui queue
          OperationQueue.main.addOperation({
              NSLog("Done")
          })
      }

      let queue = OperationQueue()

      // Block is executed directly
      queue.addOperation(block)
  }
  ```
  
  ```swift
  // Cancel
  func executeOperation() {
        
        let block = BlockOperation()
        block.addExecutionBlock {
            NSLog ("start")
            
            sleep(2)
            
            NSLog ("stop \(block.isCancelled)")
        }
        
        let queue = OperationQueue()
        queue.addOperation(block)
        
        sleep(1)
        block.cancel()
    }
  ```
  
  ```swift
  // Dependency
   func demoDependencyOperation() {
        let block1 = BlockOperation {
            NSLog("block1")
        }
        
        let block2 = BlockOperation {
            NSLog("block2")
        }
        
        let queue = OperationQueue()
        
        block1.addDependency(block2)
        queue.addOperation(block1)
        queue.addOperation(block2)
        
        // result stdout:
        // "block2"
        // "block1"
    }
  ```
