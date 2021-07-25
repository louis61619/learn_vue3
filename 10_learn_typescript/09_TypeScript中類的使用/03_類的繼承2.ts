class Person {
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }


  eating() {
    console.log(this.name + ' eating')
  }
}

class Student extends Person {
  sno: number = 0

  
  constructor(name: string, age: number, sno: number) {
    super(name, age) // 調用父類的構造器 constructor
    this.sno = sno
  }

  // 對父類中的方法做重寫
  eating() {
    super.eating()
    console.log(this.name + ' student studing')
  }

  studing() {
    console.log(this.name + ' studing')
  }
}

const stu = new Student("Renny", 25, 1)
console.log(stu.name)
stu.eating()

export {}