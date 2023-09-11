<script>
export default {
  name: "BookItem",
  props: ["book"],
  data() {
    return {
      showDescription: false,
    }
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription;
    }
  }
}
</script>

<template>
  <div>
    <h3 @click="toggleDescription">{{ book.title }}</h3>
    <div v-if="showDescription">
      <p>Автор: {{ book.author }}</p>
      <p>Год издания: {{ book.year }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
