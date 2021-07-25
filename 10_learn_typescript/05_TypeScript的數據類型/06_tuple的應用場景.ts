

function useState(state: any) {
  let currentState = state

  const changeState = (newState: any) => {
    currentState = newState
  }

  // 透過元組類型可以指令第二個參數是函數型
  const arr: [any, (newState: any) => void] = [currentState, changeState]

  return arr
}


const [counter, setCounter] = useState(10)

export {}

