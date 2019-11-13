import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: 'Jane Doe',
    }
  },
  render() {
    return <div class={{name: true}}>{this.name}</div>
  },
})
