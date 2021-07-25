// 通過interface來定義索引類型

interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  // "fjidjfi": "4848" // 報錯
}