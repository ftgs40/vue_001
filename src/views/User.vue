<template>
  <div>
    <h1>User: {{$route.params.id}} {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data: function() {
    return {
      id: this.$route.params.id,
      name: '',
    }
  },
  methods: {
    getNameByID: function(id) {
      if (id == 1) {
        return this.name = 'แดง'
      } else {
        return this.name = 'ดำ'
      }
    }
  },
  // computed: {
  //   username() {
  //     return this.getNameByID(this.$route.params.id)
  //   }
  // },
  watch: {
    $route: function (newID, oldID) {
      console.log(newID)
      this.name = this.getNameByID(this.$route.params.id)
    }
  },
  created: function() {
    this.name = this.getNameByID(this.$route.params.id)
  }

}
</script>

<style>

</style>