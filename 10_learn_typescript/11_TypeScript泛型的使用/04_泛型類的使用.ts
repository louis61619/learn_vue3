class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p1 = new Point("8", "8", "8")
const p2 = new Point<string> ("8", "8", "8")
const p3: Point<string> = new Point("8", "8", "8")

const names: string[] = ["dfs", "fs", "ddd"]
const names2: Array<string> = ["jfdis", "jfdis", "fjdsio"]