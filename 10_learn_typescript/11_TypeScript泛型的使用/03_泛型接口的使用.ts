interface IPerson<T = string, S = number> {
  name: T,
  age: S
}

const p: IPerson = {
  name: "Renny",
  age: 8
}


export {}