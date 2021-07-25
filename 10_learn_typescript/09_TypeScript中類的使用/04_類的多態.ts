class Animal {
  action() {
    console.log("animal running")
  }
}


class Dog extends Animal {
  action() {
    console.log("Dog running")
  }
}

class Fish extends Animal {
  action() {
    console.log("Fish swimming")
  }
}

function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}


// 父類引用 指向子類物件
// 多態的目的是為了寫出更加具備通用性的程式碼
makeActions([new Dog(), new Fish()])

