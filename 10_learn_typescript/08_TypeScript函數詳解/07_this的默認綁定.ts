
// this是typescript推導出來的
const info = {
  name: "Renny",
  eating() {
    console.log(this.name)
  }
}

info.eating()