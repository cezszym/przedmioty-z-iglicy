import { ref } from 'vue';
import axios from 'axios';

export default function useKeywords() {
  const keywords = ref([]);

  const fetchKeywords = async () => {
    axios
      .get('https://nest-spire.vercel.app/keywords')
      .then((res) => {
        keywords.value = res.data;
      })
      .catch(() => {});
  };

  return { keywords, fetchKeywords };
}
