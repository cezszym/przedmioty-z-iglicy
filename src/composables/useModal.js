import { ref, computed } from 'vue';

let state = ref({ modalOpen: false });

export default function useModal() {
  const getModalOpen = computed(() => {
    return state.value.modalOpen;
  });

  const setModalOpen = (boolean = true) => {
    state.value.modalOpen = boolean;
  };

  return { getModalOpen, setModalOpen };
}
