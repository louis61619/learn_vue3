function calc(n1: number, n2: number, fun: (n1: number, n2: number) => number) {
  return fun(n1, n2)
}

calc(1, 1, (n1, n2) => {
  return n1 + n2
})