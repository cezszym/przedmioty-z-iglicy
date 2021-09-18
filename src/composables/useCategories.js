import { computed } from 'vue';

export default function useCategories(items) {
  const findByCategory = (name) => {
    return [...items.value].filter((item) => item.rarity === name);
  };

  const categories = computed(() => [
    {
      name: 'Początkowe',
      items: findByCategory('początkowy'),
    },
    { name: 'Pospolite', items: findByCategory('pospolity') },
    { name: 'Niepospolite', items: findByCategory('niepospolity') },
    { name: 'Rzadkie', items: findByCategory('rzadki') },
    { name: 'Legendarne', items: findByCategory('legendarny') },
    { name: 'Unikalne', items: findByCategory('unikalny') },
  ]);

  return { categories };
}
