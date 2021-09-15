<template>
  <DetailsContent :item="item" />
  <teleport to="#appWrapper">
    <transition name="appear">
      <div v-if="getModalOpen" class="modalWrapper">
        <img
          @click="setActiveItem(prevId)"
          class="triangle left"
          :class="{ disabled: !prevId }"
          src="../assets/triangle.svg"
        />
        <div @click="setModalOpen(false)" class="modalBackground" />
        <div class="modal basePadding">
          <img :src="item.image" :alt="item.name" />
          <DetailsContent :item="item" />
        </div>
        <img
          @click="setActiveItem(nextId)"
          class="triangle right"
          :class="{ disabled: !nextId }"
          src="../assets/triangle.svg"
        />
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
    const { setActiveItem } = useActiveItem();
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
      setActiveItem,
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
    nextId: {
      type: String,
      default: null,
    },
    prevId: {
      type: String,
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
    top: 10%;
  }
  100% {
    top: 0%;
  }
}
.modalWrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .triangle {
    z-index: 3;
    cursor: pointer;

    &.right {
      transform: rotate(180deg);
    }
    &.disabled {
      opacity: 0.7;
      filter: grayscale(1);
    }
  }
  .modalBackground {
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.9);
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .modal {
    position: relative;
    animation-name: unroll;
    animation-duration: 0.5s;
    overflow-x: hidden;
    background: $gray;
    height: fit-content;
    width: 50%;
    z-index: 3;
    border-radius: 8px;
    padding-bottom: 30px;
    padding-top: 50px;
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
@media (max-width: 800px) {
  .modalWrapper {
    .modal {
      width: 80%;
      transform: translateY(-100px);
      > img {
        width: 90px;
        height: 90px;
      }
    }
    .triangle {
      position: absolute;
      bottom: 15%;
      width: 60px;
      &.left {
        left: 15vw;
      }
      &.right {
        right: 15vw;
      }
    }
  }
}
</style>
