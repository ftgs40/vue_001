<template>
  <div>
    <b-row class="main-header">
      <div>
        <div class="menu-group">
          <b-button-group>
            <b-button v-on:click="pushLink('/')">Home</b-button>
            <b-button v-on:click="pushLink('/about')">About</b-button>
            <b-button v-on:click="pushLink('/user/1')">User 1</b-button>
            <b-button v-on:click="pushLink('/user/2')">User 2</b-button>
          </b-button-group>
        </div>
      </div>
    </b-row>
    <b-container>
      <h1>Bootstrap Vue</h1>
      <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
      </div>
      <!-- <div>
        <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div> -->
      <b-row>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form-example">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    pushLink: function(route) {
      this.$router.push(route)
    },
    onSubmit: function(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
    },
    onReset: function(event) {
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
    }

  }
}
</script>

<style>
  .main-header {
    height: 50px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }
  .form-example {
    text-align: left;
    width: 100%;
  }
</style>