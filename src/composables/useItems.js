import { ref } from 'vue';
import axios from 'axios';

export default function useItems() {
  const items = ref([]);
  const fetchingStatus = ref(false);

  const fetchItems = async () => {
    fetchingStatus.value = true;
    axios
      .get('https://nest-spire.vercel.app/items')
      .then((res) => {
        items.value = res.data;
        fetchingStatus.value = false;
      })
      .catch(() => {});
  };

  return { items, fetchItems, fetchingStatus };
}
