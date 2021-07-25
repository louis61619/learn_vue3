
// 確定陣列中存放甚麼類型的元素
// type: annotation 類型註解
const names1: Array<string> = [] // 不推薦 在jsx中可能會有衝突
const names2: string[] = [] // 推薦

// 在陣列中存放不同的類型是不好的習慣
names1.push('88')
// names.push(44)

export {}