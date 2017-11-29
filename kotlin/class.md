```kotlin
// Sample

var person = Person(26, "Phong Cao")
println(person.toString())

println(person.getAge())
println(person.getName())

person.setAge(8)
person.setName("ABC")

println(person.toString())
        
class Person {
    private var age : Int = 0
    private var name : String = ""

    constructor(age: Int, name: String) {
        this.age = age
        this.name = name
    }

    fun getName() : String {
        return this.name;
    }

    fun setName(name : String) {
        this.name = name;
    }

    fun getAge() : Int {
        return this.age
    }

    fun setAge(age: Int) {
        this.age = age
    }

    override fun toString(): String {
        return "Person(age=$age, name='$name')"
    }

}

```
