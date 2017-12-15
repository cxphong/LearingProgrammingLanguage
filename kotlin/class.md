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

```kotlin
// class
open class Person(var age: Int, var name: String) {

}

class Student(age: Int, name: String, var grade: Int) : Person(age, name) {
}

 var student = Student(8, "Tom", 2)

println(student.age)
println(student.name)
println(student.grade)

student.age = 26
student.name = "phong"
student.grade = 12

println(student.age)
println(student.name)
println(student.grade)

```

```Kotlin
#Inheritance
class Student(age: Int, name: String, grade: Int) : Person(age, name) {
    private var grade : Int = 0;

    init {
        this.grade = grade
    }

    fun getGrade() : Int {
        return this.grade
    }

    fun setGrade(grade : Int) {
        this.grade = grade
    }
}

...
var student = Student(8, "Tom", 2)
```
