<template>
  <div @mouseover="setActiveItem(item._id)" @click="setModalOpen" class="item">
    <img :src="item.image" :alt="item.name" />
    <div class="name">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import useActiveItem from '../../composables/useActiveItem';
import useModal from '../../composables/useModal';
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { setActiveItem } = useActiveItem();
    const { setModalOpen } = useModal();
    return { setActiveItem, setModalOpen };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: calc(16.66% - 20px);
  height: 140px;
  background: $gray;
  cursor: pointer;
  transition: 0.4s;
  margin: 10px;
  border-radius: 8px;

  @media (min-width: 1200px) {
    &:hover {
      box-shadow: $box-shadow;
      background: $dark;
      display: inline-table;
      transform: perspective(1px) scale(1.1) translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
    }
  }
  > img {
    width: 80px;
    height: 80px;
    user-select: none;
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    padding: 0 5px;
  }
}

@media (max-width: 1200px) {
  .item {
    width: calc(20% - 16px);
    height: 120px;
    margin: 8px;
    > img {
      width: 60px;
      height: 60px;
    }
    .name {
      font-size: $small;
    }
  }
}

@media (max-width: 700px) {
  .item {
    width: calc(33% - 12px);
    min-width: 75px;
    margin: 6px;
    height: fit-content;
    padding: 10px 0;
    > img {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
