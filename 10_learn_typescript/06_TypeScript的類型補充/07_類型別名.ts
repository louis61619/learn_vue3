type UnionType = string | number | boolean

type PointType = {
  x: number,
  y: number,
  z?: number
}

function foo(message: UnionType) {
  console.log(message)
}

foo("888")
foo(555)


function printPoint(point: PointType) {

}

export {}