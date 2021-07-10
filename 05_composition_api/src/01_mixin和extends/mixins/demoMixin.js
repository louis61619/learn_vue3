export const demoMixin = {
  data() {
    return {
      message: "Hello Mixin"
    }
  },
  created() {
    console.log("Hello demo mixin")
  },
  methods: {
    itemClick() {
      console.log('------')
    }
  },
}