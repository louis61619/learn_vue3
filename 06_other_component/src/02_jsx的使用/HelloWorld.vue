<script>
export default {
  render() {
    console.log(this.$slots.default)
    return (
      <div>
        <h2>Hello React</h2>
        {
          this.$slots.default? this.$slots.default(): <span>沒有傳值</span>
        }
      </div>
    )
  }
}
</script>
