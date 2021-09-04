<template>
  <div class="appWrapper">
    <div class="leftSide basePadding">
      <h1>Przedmioty z Iglicy</h1>
      <p>Lista przedmiotów z gry Slay the Spire</p>
      <Category
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />
    </div>
    <div class="rightSide basePadding">
      <Details :item="getActiveItem" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import './assets/base.scss';
import axios from 'axios';
import useActiveItem from './composables/useActiveItem';
import Category from './components/Category.vue';
import Details from './components/Details.vue';
export default {
  name: 'App',
  components: { Category, Details },

  setup() {
    const items = ref([]);
    const { getActiveItemId, getActiveItem } = useActiveItem(items);
    const starters = computed(() =>
      [...items.value].filter((item) => item.rarity === 'początkowy')
    );
    const categories = computed(() => [
      {
        name: 'Początkowe',
        items: [...items.value].filter((item) => item.rarity === 'początkowy'),
      },
      { name: 'Category', items: [] },
      { name: 'Category', items: [] },
    ]);
    return {
      getActiveItemId,
      getActiveItem,
      categories,
      items,
      starters,
    };
  },
  mounted() {
    axios
      .get('https://nest-spire.vercel.app/items')
      .then((res) => (this.items = res.data))
      .catch(() => {});
  },
};
</script>

<style lang="scss">
.appWrapper {
  display: flex;
  position: relative;
}
.leftSide {
  width: 66.66%;
  min-height: 100vh;
  background: $black;
  > h1 {
    margin-top: 50px;
    font-size: $huge;
    color: $yellow;
    -webkit-text-stroke: 2px $gray;
    text-align: center;
  }
  > p {
    font-size: 1.75rem;
    text-align: center;
    margin-top: 20px;
    color: $gray;
  }
}
.rightSide {
  position: fixed;
  top: 0;
  right: 0;
  width: 33.33%;
  height: 100%;
  background: $gray;
}
</style>
