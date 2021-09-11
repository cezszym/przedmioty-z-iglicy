<template>
  <DetailsContent :item="item" />
  <teleport to="#appWrapper">
    <transition name="appear">
      <div v-if="getModalOpen" class="modalWrapper">
        <div @click="setModalOpen(false)" class="modalBackground" />
        <div @click="setNextItem" class="modal basePadding">
          <img :src="item.image" :alt="item.name" />
          <DetailsContent :item="item" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import DetailsContent from './partials/DetailsContent.vue';
import { computed, ref } from 'vue';
import useModal from '../composables/useModal';
import useActiveItem from '../composables/useActiveItem';
export default {
  components: {
    DetailsContent,
  },
  setup() {
    const { getModalOpen, setModalOpen } = useModal();
    const { setNextItem } = useActiveItem();
    const abilities = ref([
      {
        name: ['Cud'],
        description: 'Karta Cudu po użyciu daje 1 punkt energii.',
      },
    ]);

    const abilityBox = ref(null);

    const abilitiesNames = computed(() =>
      abilities.value.map((a) => a.name).flat()
    );

    const displayDescription = (name) => {
      const abitliy = abilities.value.find((a) => a.name.includes(name));
      abilityBox.value = abitliy.description;
    };

    return {
      setNextItem,
      getModalOpen,
      setModalOpen,
      abilitiesNames,
      displayDescription,
      abilityBox,
    };
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.3s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
@keyframes unroll {
  0% {
    top: 65%;
  }
  100% {
    top: 50%;
  }
}
.modalWrapper {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .modalBackground {
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.9);
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .modal {
    animation-name: unroll;
    animation-duration: 0.5s;
    overflow-x: hidden;
    position: absolute;
    background: $gray;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    width: 80%;
    z-index: 3;
    border-radius: 8px;
    padding-bottom: 20px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    > img {
      width: 150px;
      height: 150px;
      align-self: center;
    }
  }
}
</style>
