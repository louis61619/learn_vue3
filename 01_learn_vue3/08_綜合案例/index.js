const app = {
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '<<神奇的魔法石>>',
          data: '2000.01.23',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '<<神奇的魔法石>>',
          data: '2000.01.23',
          price: 90.00,
          count: 1
        },
        {
          id: 3,
          name: '<<神奇的魔法石>>',
          data: '2000.01.23',
          price: 84.00,
          count: 1
        },{
          id: 4,
          name: '<<神奇的魔法石>>',
          data: '2000.01.23',
          price: 85.00,
          count: 1
        },
      ]
    }
  },
  computed: {
    total() {
      let total = 0;
      for(let item of this.books) {
        total = total + (item.price * item.count)
      }
      return total
      // return "$" + total
    },
    // vue3不支持過濾器，推薦兩種作法 計算屬性 全局方法
    newBooks() {
      return this.books.map(item => {
        // const newItem = {...item}
        const newItem = Object.assign({}, item)
        newItem.price = '$' + newItem.price
        return newItem
      })
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      if(this.books[index].count === 1) return
      this.books[index].count--
    },
    deletebook(index) {
      console.log(index)
      this.books.splice(index, 1)
    },
    filterPrice(value) {
      return "$" + value
    }
    // total() {
    //   let total = 0;
    //   for(let item of this.books) {
    //     total = total + (item.price * item.count)
    //   }
    //   return total
    // }
  },
}
Vue.createApp(app).mount('#app')