
// 聯合類型實現

// function getLength(args: string | any[]) {
//   return args.length
// }


// 函數重載實現

function getLength(args: string): number
function getLength(args: any[]): number

function getLength(args: any): number {
  return args.length
}


// 如果能通過聯合類型簡單實現就優先

export {}