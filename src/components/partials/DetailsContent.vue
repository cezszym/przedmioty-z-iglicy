<template>
  <div v-if="item" class="details">
    <p class="name">{{ item.name }}</p>
    <p class="label">Efekt</p>
    <p class="description" v-if="item.description">
      <span
        v-for="(word, index) in item.description.split(' ')"
        :key="index"
        :class="{ yellow: abilitiesNames.includes(word) }"
        @mouseover="abilitiesNames.includes(word) && displayDescription(word)"
        @mouseleave="
          {
            abilityBox = null;
          }
        "
      >
        {{ word }}&nbsp;
        <span v-if="abilitiesNames.includes(word) && abilityBox">
          {{ abilityBox }}
        </span>
      </span>
    </p>
    <p class="label">Klasa</p>
    <p class="class">{{ item.class || 'Wszystkie postacie' }}</p>
    <p class="label">Rzadkość</p>
    <p class="rarity">{{ item.rarity }}</p>
    <p class="label">Opis</p>
    <p class="italic">„{{ item.text }}”</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup() {
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
.rightSide > .details {
  margin-top: 50px;
  .name {
    font-size: clamp(1.75rem, 1.3333rem + 0.5556vw, 2rem);
    text-align: center;
    margin: 0 5px 50px;
  }
  .label {
    font-size: $regular;
    margin: 15px 0;

    & + p {
      background: $black;
      padding: 20px;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      line-height: 1.3;
      &.italic {
        font-style: italic;
      }
      &::first-letter {
        text-transform: uppercase;
      }
      .yellow {
        position: relative;
        color: $yellow;
        cursor: help;
        > span {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          transform: translate(-102%, -102%);
          padding: 15px;
          font-size: $small;
          line-height: 1.2;
          width: 200px;
          background: $dark;
          border-radius: 8px 8px 0 8px;
          box-shadow: $box-shadow;
          opacity: 0.9;
        }
      }
    }
  }
}
.modal > .details {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .name {
    color: $yellow;
    font-size: $medium;
  }
  .description {
    margin: 20px 0;
    font-size: $regular;
  }
  > :not(.description) {
    display: inline;
    margin: 10px;
  }
  .rarity,
  .class {
    position: absolute;
    top: 15px;
  }
  .rarity {
    left: 15px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .class {
    right: 15px;
  }
  .italic {
    position: relative;
    display: block;
    font-style: italic;
    width: 60%;
    padding-top: 20px;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      left: 0;
      top: 0;
      border-bottom: 1px solid $white;
    }
  }
  .label {
    display: none;
  }
}
@media (max-width: 700px) {
  .modal > .details {
    .name {
      color: $yellow;
      font-size: $regular;
    }
    .description {
      margin: 10px 0;
      font-size: $default;
    }
    .rarity,
    .class {
      font-size: $small;
    }
    .italic {
      width: 90%;
    }
  }
}
</style>
