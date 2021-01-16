<template>
  <div class="text-left">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Firstname:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.firstname"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Lastname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tel:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.tel"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'FormUser',
  props: {
    addUser: Function,
    userData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data: function() {
    return {
      form: {
        firstname: '',
        lastname: '',
        age: '',
        tel: '',
      },
      show: true,
    }
  },
  watch: {
    userData(user) {
      this.form = user
    }
  },
  methods: {
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onSubmit(event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      this.addUser(this.form)
    },
  }
}
</script>

<style>

</style>