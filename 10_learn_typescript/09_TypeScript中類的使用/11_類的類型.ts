class Person {
  name: string = ""
  eating() {

  }
}



const p: Person = {
  name: "Renny",
  eating() {

  }
}

const printPerson = (p: Person) => {
  console.log(p)
}

printPerson(new Person)
printPerson({name: "Louis", eating() {}})

export {}