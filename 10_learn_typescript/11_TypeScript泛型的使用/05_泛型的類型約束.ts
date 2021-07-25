interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

// getLength(154)
getLength([])