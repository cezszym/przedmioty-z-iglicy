<template>
  <transition name="unroll">
    <div v-if="category && category.items.length" class="category">
      <h2>{{ category.name }}</h2>
      <div class="items">
        <Item
          v-for="(item, index) in category.items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </transition>
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
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.unroll-enter-active,
.unroll-leave-active {
  transition: all 0.5s ease;
}

.unroll-enter-from,
.unroll-leave-to {
  opacity: 0.5;
  transform: translateY(50px);
}
.category {
  text-align: center;
  margin-bottom: 50px;
  > h2 {
    margin: 80px 0 32px;
    position: relative;
    font-size: clamp(1.2rem, calc(0.9183rem + 0.9014vw), 2rem);
    user-select: none;
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
  }
}
@media (max-width: 1200px) {
  .category {
    > h2 {
      margin: 50px 0 32px;
    }
  }
}
</style>
