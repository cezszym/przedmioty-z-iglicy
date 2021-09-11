import { ref } from 'vue';
import axios from 'axios';

export default function useItems() {
  const items = ref([]);

  const fetchItems = async () => {
    axios
      .get('https://nest-spire.vercel.app/items')
      .then((res) => (items.value = res.data))
      .catch(() => {});
  };

  return { items, fetchItems };
}
