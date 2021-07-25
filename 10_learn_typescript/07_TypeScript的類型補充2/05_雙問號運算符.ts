let message: string | null = null

// const content = message || "Hello World"

// 与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时。见下面的例子。
const content = message ?? "Hello World"

console.log(content)


export {}