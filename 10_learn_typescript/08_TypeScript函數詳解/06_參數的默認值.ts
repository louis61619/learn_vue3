
// 參數順序最好是 有默認值 => 必傳參數 => 可選參數

function sum(n1: number = 100, n2: number) {

}

// 可選類型必須寫在必選類型的後面

sum(undefined, 2)

export {}