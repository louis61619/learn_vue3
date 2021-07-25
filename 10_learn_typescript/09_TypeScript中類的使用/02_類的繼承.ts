class Person {
  name: string = ""
  age: number = 0


  eating() {
    console.log(this.name + 'eating')
  }
}

class Student extends Person {
  sno: number = 0

  studing() {
    console.log(this.name + 'studing')
  }
}

class Teacher extends Person {
  title: string = ''

  teaching() {
    console.log(this.name + 'teaching')
  }
}


const stu = new Student()
console.log(stu.name)
console.log(stu.eating)

export {}