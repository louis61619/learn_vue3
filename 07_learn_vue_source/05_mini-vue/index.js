
// 應用程序入口

const createApp = (rootComponent) => {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false
      
      let oldVnode = null

      watchEffect(function() { // 這邊要實現的是有依賴該屬性的vnode要進行更新
        if(!isMounted) {
          oldVnode = rootComponent.render()
          mount(oldVnode, container)
          isMounted = true
        } else {
          const newVnode = rootComponent.render()
          console.log(oldVnode, newVnode)
          patch(oldVnode, newVnode)
          oldVnode = newVnode
        }
      })
      
      
    }
  }
}