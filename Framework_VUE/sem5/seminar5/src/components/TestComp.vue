<script>
export default {
  name: "TestComp"
}
</script>

<template>
  <div>
    <button @click="$emit('mySupaEvent', { title: 'Test'})">Click Me!</button>
  </div>
</template>

<style scoped lang="scss">

</style>
