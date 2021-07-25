enum Directions { // 內部會有是一些數字常量
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

let name: string = "abd"

function turnDirection(direction: Directions) {
  switch (direction) {
    case Directions.LEFT:
      console.log("向左");
      break;
    case Directions.RIGHT:
      console.log("向右");
      break;
    case Directions.TOP:
      console.log("向上");
      break;
    case Directions.BOTTOM:
      console.log("向下");
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Directions.BOTTOM);

export {};
