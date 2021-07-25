
/**
 * 使用聯合類型 
 * 1. 要進行很多類型判斷
 * 2. 返回值得類型不能確定
 */

function add (num1: string | number , num2: string | number) {
  if (typeof num2 === 'number' && typeof num1 === 'number') {
    return num1 + num2
  }
  
}

export {}