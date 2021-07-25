
// 將原本聯合類型進一步做判斷 稱之為類型縮小

// 1. typeof的類型縮小
type IDtype = string | number

function printID (id: IDtype) {
  if(typeof id === "number") {
    console.log(id.toFixed())
  } else {
    console.log(id.toLowerCase())
  }
}


// 2.平等的類型縮小
type Direction = "left" | "right"
function printDirection (value: Direction) {
  // if 判斷
  // if(value === "left") {

  // }

  // switch 判斷
  // switch (value) {
  //   case "left":
      
  //     break;
  
  //   default:
  //     break;
  // }
}


// 3. instance
function printDate(time: string | Date) {
  if(time instanceof Date) {
    console.log(time.toUTCString())
  } else {

  }
}

class Teacher {
  teachng() {

  }
}

class Student {
  study() {

  }
}

function work(p: Teacher | Student) {
  if (p instanceof Teacher) {
    p.teachng()
  }
}


// 4. in
type Fish = {
  swimming: () => void
}
type Dog = {
  running: () => void
}

function move(animal: Fish | Dog) {
  if ('swimming' in animal) { // 判斷這個屬性有沒有在animal這個字面量物件中
    animal.swimming()
  }
}

const fish: Fish = {
  swimming() {

  }
}

move(fish)

export {}