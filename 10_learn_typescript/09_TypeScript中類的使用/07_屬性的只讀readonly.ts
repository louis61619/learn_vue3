class Person {
  // 只讀屬性 是假如在構造器中賦值 該值不可被修改
  // 屬性本身不可修改 但如果是物件類型 可以修改該物件中的屬性
  readonly name: string = ""
  age?: number
  readonly friend?: Person

  constructor(name: string, friend?: Person, age?: number) {
    this.name = name
    this.friend = friend
    this.age = age
  }
}

const p = new Person("Renny", new Person("Kobe"))

console.log(p.name)

p.friend.age = 12