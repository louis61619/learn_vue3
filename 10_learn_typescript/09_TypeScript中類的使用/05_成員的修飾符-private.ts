class Person {
  public name: string = ""
  private age: number = 16


  // setAge(newAge) {
  //   this.age = newAge
  // }

  getAge(): number | string {
    return this.age
  }
}

class Student extends Person {
  getAge() {
    // return this.age
    return this.name
  }
}

const s = new Student()

// console.log(p.name)
// console.log(p.age) private不可訪問

export {}