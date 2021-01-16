<template>
  <b-container>
    <FormUser v-bind:addUser="updateUserById" v-bind:userData="userData" ></FormUser>
  </b-container>
</template>

<script>
import axios from 'axios'
import FormUser from '../components/FormUser'

export default {
  name: 'UserEdit',
  components: {
    FormUser,
  },
  data: function() {
    return {
      userData: {}
    }
  },
  created: function() {
    this.getUserByID(this.$route.params.id)
  },
  methods: {
    async getUserByID(id) {
      try {
        let result = await axios.get('http://vue-api.nncarrent.com/getUserByID.php?id=' + id)
        console.log(result.data)
        this.userData = result.data
      } catch (error) {
        console.log('error->', error)
      }
    },
    async updateUserById(data) {
      const userID = this.userData.id
      try {
        let result = await axios.post('http://vue-api.nncarrent.com/updateUserByID.php?id=' + userID, {
          firstname: data.firstname,
          lastname: data.lastname,
          age: data.age,
          tel: data.tel,
        })
        console.log(result.data)
        this.$router.push('/')
      } catch (error) {
        console.log('error->', error)
      }
    }
  }
}
</script>

<style>

</style>