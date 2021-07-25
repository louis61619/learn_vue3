
function printPoint(point: {x: number, y: number, z?: number}) {
  const {x, y, z} = point
  console.log(z)
}


printPoint({x: 555, y: 888})
printPoint({x: 555, y: 888, z: 999})

export {}