<template>
  <div @mouseover="setActiveItem(item._id)" class="item">
    <img :src="item.image" :alt="item.name" />
    <div class="name">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import useActiveItem from '../../composables/useActiveItem';
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { setActiveItem, getActiveItemId } = useActiveItem();

    return { setActiveItem, getActiveItemId };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 110px;
  height: 140px;
  background: $gray;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    background: $dark;
  }
  > img {
    width: 80px;
    height: 80px;
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    padding: 0 5px;
  }
}
</style>
