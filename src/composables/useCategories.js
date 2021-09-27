import { computed } from 'vue';

export default function useCategories(items) {
  const findByCategory = (name) => {
    return [...items.value].filter((item) => item.rarity === name);
  };

  const categories = computed(() => [
    {
      name: 'Początkowe',
      description: 'Postać może zacząć grę z tymi artefaktami.',
      items: findByCategory('początkowy'),
    },
    {
      name: 'Pospolite',
      description: 'Postać może zacząć grę z tymi artefaktami.',
      items: findByCategory('pospolity'),
    },
    {
      name: 'Niepospolite',
      description: 'Potężniejsze, ale i rzadsze artefakty.',
      items: findByCategory('niepospolity'),
    },
    {
      name: 'Rzadkie',
      description: 'Bardzo potężne oraz unikalne przedmioty.',
      items: findByCategory('rzadki'),
    },
    {
      name: 'Legendarne',
      description: 'Artefakty występujące jedynie w skrzyniach bossów.',
      items: findByCategory('legendarny'),
    },
    {
      name: 'Unikalne',
      description: 'Te artefakty można uzyskać tylko podczas wydarzeń.',
      items: findByCategory('unikalny'),
    },
    {
      name: 'Zakupione',
      description: 'Artefakty, które można zakupić u Handlarza.',
      items: findByCategory('zakupiony'),
    },
  ]);

  return { categories };
}
