<template>
  <b-container>
    <h1>User List</h1>
    <b-row>
      <b-col>
        <FormUser v-bind:addUser="addUser"></FormUser>
      </b-col>
  
      <b-col>
        <div>
          <div>
            <b-table striped hover :items="items" :fields="fields">
              <template #cell(delete)="data">
                 <a href="javascript:void(0)" v-on:click="deleteByID(data.item.id)">ลบ</a>
              </template>
              <template #cell(edit)="data">
                 <a href="javascript:void(0)" v-on:click="goToEditPage(data.item)">แก้ไข</a>
              </template>
            </b-table>
          </div>
          <div v-if="!getItemTotal">
            ไม่พบข้อมูล
          </div>
        </div>
      </b-col>
    </b-row>
    

    
  </b-container>
</template>

<script>
import axios from 'axios'
import FormUser from '@/components/FormUser.vue'

export default {
  components: {
    FormUser
  },
  data() {
    return {
      fields: [
        { key: 'firstname', label: 'ชื่อจริง' },
        { key: 'lastname', label: 'นามสกุล' },
        { key: 'age', label: 'อายุ' },
        { key: 'edit', label: 'แก้ไข' },
        { key: 'delete', label: 'ลบ' },
      ],
      items: [
        // { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        // { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        // { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        // { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
    }
  },
  computed: {
    getItemTotal: function() {
      if (this.items.length > 0) {
        return true
      } else {
        return false
      }
    },
  },
  created: function() {
    this.getAllUser()
  },
  methods: {
    async addUser(data) {
      console.log(JSON.stringify(data))
      let result
      try {
        result = await axios.post('http://vue-api.nncarrent.com/createUser.php', {
          firstname: data.firstname,
          lastname: data.lastname,
          age: data.age,
          tel: data.tel,
        })
        console.log(result.data)
        this.getAllUser()
      } catch (error) {
        console.log('error->', error)
      }
    },
    async getAllUser() {
      try {
        let result = await axios.get('http://vue-api.nncarrent.com/getUserList.php')
        console.log(result.data)
        this.items = result.data
      } catch (error) {
        console.log('error->', error)
      }
    },
    async deleteByID(id) {
      console.log(id)
      try {
        let result = await axios.post('http://vue-api.nncarrent.com/deleteUserByID.php?id=' + id)
        console.log(result.data)
        this.getAllUser()
      } catch (error) {
        console.log('error->', error)
      }
    },
    async goToEditPage(userData) {
      this.$router.push({ path: `/user/edit/${userData.id}` })
    },
  }
}
</script>

<style>

</style>