<template>
  <div v-if="item" class="details">
    <p>{{ item.name }}</p>
    <p>{{ item.description }}</p>
    <p>{{ item.text }}</p>
    <p>{{ item.class }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  margin-top: 50px;
}
</style>
