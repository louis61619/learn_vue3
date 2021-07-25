function makeArea(shap: Shap) {
  return shap.getArea()
}

abstract class Shap {
  // 並且抽象類不能實例化
  // 抽象類中的抽象方法必須被子類實現
  abstract getArea(): number
}

class Rectengle extends Shap {
  width: number
  height: number

  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.height * this.width
  }
}

class Triangle extends Shap {
  r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return this.r * this.r * 3.14
  }
}

const rec = new Rectengle(15, 15)
console.log(rec)

console.log(makeArea(rec))
