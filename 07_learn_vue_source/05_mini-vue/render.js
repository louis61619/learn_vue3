
// 渲染系統

const h = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}

// test
// const mount = (vnode, container) => {
//   const el = document.createElement(vnode.tag)
//   for(let key in vnode.props) {
//     el.setAttribute(key, vnode.props[key])
//   }

//   console.log(typeof vnode.children)
//   if(typeof vnode.children === "object") {
//     for(let item of vnode.children) {
//       mount(item, el)
//     }
//   } else {
//     el.innerHTML = vnode.children
//   }
//   // console.log(el)
//   // console.log(container)
//   container.appendChild(el)
// }

// teacher
// test
const mount = (vnode, container) => {
  const el = vnode.el = document.createElement(vnode.tag)
  
  // 處理標籤
  if(vnode.props) {
    for(const key in vnode.props) {
      const value = vnode.props[key]
      if(key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }


  // 處理children
  if(vnode.children) {
    // console.log(vnode.children)
    if(typeof vnode.children === "string") {
      el.textContent = vnode.children
    } else {
      for(let item of vnode.children) {
        mount(item, el)
      } 
    }
  }

  // 將el掛載的container上
  container.appendChild(el)
}


// n1: oldNode   n2: newNode 舊節點會是已經被mount過的節點 所以可以拿到真實dom的屬性
const patch = (n1, n2) => {
  // console.log(n1, n2)
  if (n1.tag !== n2.tag) {
    const parentNode = n1.el.parentNode
    parentNode.removeChild(n1.el)
    // console.log(parentNode)
    mount(n2, parentNode)
  } else {
    // 1. 保存element物件
    // 由於n2還沒有經過mount所以el屬性中不會保存tag 所以這時候將n2.el賦值為舊的n1的el
    const el = n2.el = n1.el
    // console.log(el)

    // 2.處理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 獲取所有newProps加到el 如果相同的就不用加
    for(const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if(oldValue !== newValue) {
        if(key.startsWith('on')) { // 對事件監聽做判斷
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }

    // 刪除舊的props
    for(const key in oldProps) {
      if(key.startsWith('on')) { // 舊的事件要被移除掉避免多次掛載
        el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key])
      }
      if(!(key in newProps)) { // 判斷新的props有沒有這個key
        el.removeAttribute(key)
      }
    }

    // 處理children
    const oldChildren = n1.children
    const newChildren = n2.children
    
    // 可以做更多的邊緣情況判斷 edge case
    if(typeof newChildren === "string") { // 情況一: newChildren本身是字符串
      if(typeof oldChildren === "string") {
        if (oldChildren !== newChildren) {
          el.textContent = newChildren
        }
      }  else {
        el.innerHTML = newChildren
      }
    } else { // 情況二: newChildren本身是陣列

      if (typeof oldChildren === "string") { // oldChildren是字串就直接清空並進行掛載
        el.innerHTML = ""
        mount(newChildren, el)
      } else {
        // 這邊不考慮存在key的情況而是直接進行diff算法的vnode比對
        // 將節點進行比對更新
        const commonLength = Math.min(oldChildren.length, newChildren.length)
        // console.log(commonLength)

        for(let i = 0; i < 2; i++) {
          // console.log(i)
          patch(oldChildren[i], newChildren[i]) // 比對新舊節點進行更新
        }

        if(newChildren.length > oldChildren.length) { // 新節點的數量大於舊節點 對多出的節點進行掛載
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el)
          })
        }

        if(newChildren.length < oldChildren.length) { // 舊節點的數量大於舊節點 對多出的節點進行刪除
          oldChildren.slice(newChildren.length).forEach(item => {
            el.removeChild(item.el)
          })
        }
      }
      

      

    }

  }
}