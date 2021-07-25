class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }
}

const p = new Person("Renny")
p.name = "Louis"
console.log(p.name)


export {}