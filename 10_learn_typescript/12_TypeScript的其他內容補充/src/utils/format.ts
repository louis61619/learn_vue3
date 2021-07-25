export namespace time {
  export function format(date: Date) {
    return date.toUTCString()
  }
}

namespace price {
  export function format(price: string) {
    return price
  }


  let price: string = "46843"
}

time.format(new Date())