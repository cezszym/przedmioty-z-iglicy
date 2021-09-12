import { ref, computed } from 'vue';

let state = ref({ activeId: null });

export default function useActiveItem(items) {
  const getActiveItem = computed(() => {
    if (items.value.length) {
      return [...items.value].find((item) => item._id === state.value.activeId);
    }
    return null;
  });

  const getIdOfNextItem = computed(() => {
    if (items.value.length && state.value.activeId) {
      const currentIndex = [...items.value]
        .map((item) => item._id)
        .indexOf(state.value.activeId);
      return items.value[currentIndex + 1]
        ? items.value[currentIndex + 1]._id
        : null;
    }
    return null;
  });

  const getIdOfPrevItem = computed(() => {
    if (items.value.length && state.value.activeId) {
      const currentIndex = [...items.value]
        .map((item) => item._id)
        .indexOf(state.value.activeId);
      return items.value[currentIndex - 1]
        ? items.value[currentIndex - 1]._id
        : null;
    }
    return null;
  });

  const setActiveItem = (id) => {
    if (id) {
      state.value.activeId = id;
    }
  };

  return { getActiveItem, setActiveItem, getIdOfNextItem, getIdOfPrevItem };
}
