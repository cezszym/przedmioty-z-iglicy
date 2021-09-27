<template>
  <div @mouseover="setActiveItem(item._id)" @click="setModalOpen" class="item">
    <picture v-if="item.image">
      <source :srcset="image.big_webp" media="(min-width: 1200px)" />
      <source :srcset="image.medium_webp" media="(min-width: 700px)" />
      <source :srcset="image.small_webp" />
      <img :src="item.image" :alt="item.name" />
    </picture>
    <div class="name">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import useActiveItem from '../../composables/useActiveItem';
import useModal from '../../composables/useModal';
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const image = computed(() => {
      const transform = (img) => img.replace('.png', '.webp');
      if (props.item && props.item.image) {
        const big = props.item.image.split('/');
        big[6] = 'w_80,h_80,c_fill';
        const medium = props.item.image.split('/');
        medium[6] = 'w_60,h_60,c_fill';
        const small = props.item.image.split('/');
        small[6] = 'w_45,h_45,c_fill';
        return {
          big_webp: transform(big.join('/')),
          medium_webp: transform(medium.join('/')),
          small_webp: transform(small.join('/')),
        };
      }
      return null;
    });
    const { setActiveItem } = useActiveItem();
    const { setModalOpen } = useModal();
    return { setActiveItem, setModalOpen, image };
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
  img {
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
    img {
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
    img {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
