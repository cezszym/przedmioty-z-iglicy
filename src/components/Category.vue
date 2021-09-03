<template>
  <div v-if="category.items.length" class="category">
    <h2>{{ category.name }}</h2>
    <div class="items">
      <Item
        v-for="(item, index) in category.items"
        :key="index"
        :item="item"
        @setActiveItem="setActive"
      />
    </div>
  </div>
</template>

<script>
import Item from './partials/Item.vue';
export default {
  components: {
    Item,
  },
  props: {
    category: {
      type: Object,
      default: () => {
        return { name: 'Category', items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11] };
      },
    },
    setActiveItem: {
      type: Function,
    },
  },
  setup(props, { emit }) {
    const setActive = (item) => {
      emit('setActiveItem', item);
    };

    return { setActive };
  },
};
</script>

<style lang="scss" scoped>
.category {
  text-align: center;

  > h2 {
    margin: 100px 0 32px;
    position: relative;
    font-size: 2rem;
    &::after {
      content: '';
      position: absolute;
      bottom: -22px;
      left: 0;
      width: 100%;
      border-bottom: 2px solid $white;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    .item {
      margin: 10px;
      border-radius: 8px;
    }
  }
}
</style>
