interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

// 支持多繼承
interface IAction extends ISwim, IFly {

}

const aciont: IAction = {
  swimming() {

  },

  flying() {

  }
}