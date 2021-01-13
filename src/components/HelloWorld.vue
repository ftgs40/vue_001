<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <hr />
    <h2>v-model</h2>
    <input type="text" v-model="inputMessage" />
    <br />
    {{ inputMessage }}
    <hr />
    <h2>v-if</h2>
    <span v-if="isSeen">Now you see me</span>
    <hr />
    <h2>v-for (Loop)</h2>
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
    <hr />
    <button v-on:click="handleClickShowName()">Show Name</button>
    <br /><br />
    <button v-on:click="handleToggleIf()">Toggle v-if</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      name: 'Nakarin',
      inputMessage: 'Hello Vue JS',
      isSeen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
    }
  },
  methods: {
    handleClickShowName: function() {
      alert(`${this.name} : ${this.inputMessage}`)
    },
    handleToggleIf: function() {
      // const { isSeen } = this
      this.isSeen = !this.isSeen
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
