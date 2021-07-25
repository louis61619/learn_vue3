interface ISwin {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

class Animal {

}

// 繼承: 只能實現單繼承
// 接口: 可以實現多接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {

  }
  eating() {

  }
}

class Person implements ISwim {
  swimming() {

  }
}

function swimAction(swimable: ISwin) {
  swimable.swimming()
}

swimAction(new Person())
swimAction(new Fish())