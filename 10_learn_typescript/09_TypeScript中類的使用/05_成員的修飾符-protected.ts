
// 子類可訪問 外部不可訪問

class Person {
  protected age: number = 16
}

class Student extends Person {
  getAge() {
    return this.age
  }
}

const stu = new Student()


// console.log(p.age) private不可訪問

export {}
