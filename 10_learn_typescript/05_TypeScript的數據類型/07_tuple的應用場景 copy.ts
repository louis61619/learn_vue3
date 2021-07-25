
// 再使用泛型可以約束返回值為傳入的參數的類型
function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state

  const changeState = (newState: any) => {
    currentState = newState
  }

  // 透過元組類型可以指令第二個參數是函數型
  const arr: [T, (newState: T) => void] = [currentState, changeState]

  return arr
}


const [counter, setCounter] = useState(10)



// type myFunction = () => void
// const foo: myFunction = () => {} 

export {}