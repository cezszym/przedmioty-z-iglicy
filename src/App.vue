<template>
  <div
    id="appWrapper"
    tabindex="0"
    @keydown.esc="setModalOpen(false)"
    @keydown.left="setActiveItem(getIdOfPrevItem)"
    @keydown.right="setActiveItem(getIdOfNextItem)"
  >
    <div class="leftSide basePadding">
      <h1>Przedmioty z Iglicy</h1>
      <p>Lista przedmiotów z gry Slay the Spire</p>
      <Loading v-if="fetchingStatus" />
      <Category
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />
    </div>
    <div class="rightSide basePadding">
      <Details
        v-if="getActiveItem"
        :item="getActiveItem"
        :next-id="getIdOfNextItem"
        :prev-id="getIdOfPrevItem"
        :keywords="keywords"
      />
    </div>
  </div>
  <Footer />
</template>

<script>
import './assets/base.scss';
import useActiveItem from './composables/useActiveItem';
import useCategories from './composables/useCategories';
import useItems from './composables/useItems';
import useKeywords from './composables/useKeywords';
import useModal from './composables/useModal';
import Category from './components/Category.vue';
import Details from './components/Details.vue';
import Loading from './components/partials/Loading.vue';
import Footer from './components/Footer.vue';
import { onMounted } from '@vue/runtime-core';
export default {
  name: 'App',
  components: { Category, Details, Loading, Footer },

  setup() {
    const { items, fetchItems, fetchingStatus } = useItems();
    const {
      getActiveItem,
      getIdOfNextItem,
      getIdOfPrevItem,
      setActiveItem,
    } = useActiveItem(items);
    const { setModalOpen } = useModal();
    const { categories } = useCategories(items);
    const { keywords, fetchKeywords } = useKeywords();
    onMounted(fetchItems(), fetchKeywords());
    return {
      getActiveItem,
      getIdOfNextItem,
      getIdOfPrevItem,
      setActiveItem,
      setModalOpen,
      categories,
      items,
      keywords,
      fetchingStatus,
    };
  },
};
</script>

<style lang="scss">
#appWrapper {
  display: flex;
  position: relative;
}
.leftSide {
  width: 70%;
  min-height: 100vh;
  background: $black;
  > h1 {
    margin-top: 50px;
    font-size: clamp(1.75rem, calc(1.0458rem + 2.2535vw), 3.75rem);
    color: $yellow;
    -webkit-text-stroke: 2px $gray;
    text-align: center;
    user-select: none;
    @media (max-width: 500px) {
      -webkit-text-stroke: unset;
    }
  }
  > p {
    font-size: clamp(1.2rem, calc(0.9183rem + 0.9014vw), 2rem);
    text-align: center;
    margin-top: 20px;
    color: $light-gray;
    user-select: none;
  }
}
.rightSide {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background: $gray;
}
@media (max-width: 1200px) {
  .leftSide {
    width: 100%;
  }
  .rightSide {
    display: none;
  }
}
</style>
