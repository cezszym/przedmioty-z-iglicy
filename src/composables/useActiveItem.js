import { ref, computed } from 'vue';

let state = ref({ activeId: null });

export default function useActiveItem(items) {
  const getActiveItemId = computed(() => state.value.activeId);

  const getActiveItem = computed(() => {
    if (items.value.length) {
      return [...items.value].find((item) => item._id === state.value.activeId);
    }
    return [];
  });

  const setActiveItem = (id) => {
    state.value.activeId = id;
  };

  return { getActiveItem, getActiveItemId, setActiveItem };
}
