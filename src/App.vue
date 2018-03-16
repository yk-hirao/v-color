<template>
  <div id="app">
    app
    <input v-model="txt" v-color:green="'opacity.5'">
    <span v-color:green>test</span>
  </div>
</template>

<script>
import './v-color'
export default {
  data() {
    return {
      txt: ''
    }
  }
}
</script>

<style>
</style>
