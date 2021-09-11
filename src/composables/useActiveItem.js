import { ref, computed } from 'vue';

let state = ref({ activeId: null });

export default function useActiveItem(items) {
  const getActiveItem = computed(() => {
    if (items.value.length) {
      return [...items.value].find((item) => item._id === state.value.activeId);
    }
    return null;
  });

  const setActiveItem = (id) => {
    state.value.activeId = id;
  };

  // const activeItemIndex = computed(() => {
  //   if (items.value.length) {
  //     return [...items.value].find((item) => item._id === state.value.activeId);
  //   }
  //   return null;
  // });

  const setNextItem = () => {
    console.log(state.value.activeId);
    // state.value.activeId = items[activeItemIndex.value + 1]._id;
  };

  return { getActiveItem, setActiveItem, setNextItem };
}
