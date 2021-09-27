<template>
  <div v-if="item" class="details">
    <p class="name">{{ item.name }}</p>
    <p class="label">Efekt</p>
    <p class="description" v-if="item.description">
      <span
        v-for="(word, index) in item.description.split(' ')"
        :key="index"
        :class="{
          keyword: item.abilities.includes(
            word
              .toLowerCase()
              .replace('.', '')
              .replace(',', '')
          ),
        }"
      >
        {{ word }}&nbsp;
      </span>
    </p>
    <p class="label">Klasa</p>
    <p class="class">{{ item.class || 'Wszystkie postacie' }}</p>
    <p class="label">Rzadkość</p>
    <p class="rarity">{{ item.rarity }}</p>
    <p class="label">Opis</p>
    <div v-if="keywords.length" class="keywords">
      <p v-for="(keyword, index) in keywords" :key="index">
        <span class="keywordName">{{ keyword.names[0] }} : </span>
        {{ keyword.description }}
      </p>
    </div>
    <p class="italic">„{{ item.text }}”</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    keywords: {
      type: Array,
      default: () => [],
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
    font-weight: 700;
  }
  .label {
    font-size: $regular;
    margin: 15px 0;

    & + p {
      background: $black;
      padding: 20px;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      line-height: 1.4;
      &.italic {
        font-style: italic;
      }
      &::first-letter {
        text-transform: uppercase;
      }
      .keyword {
        position: relative;
        color: $yellow;
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
    font-weight: 700;
  }
  .description {
    margin: 20px 0;
    font-size: $regular;
    width: 80%;
  }
  > :not(.description) {
    display: inline;
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
  .keyword {
    font-weight: 700;
  }
  .keywords {
    padding: 10px 0;
    position: relative;
    width: 80%;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      border-bottom: 1px solid $white;
    }
    p {
      margin: 10px 0;
      line-height: 1.7;
    }
    .keywordName {
      color: $yellow;
      font-weight: 700;
      text-transform: capitalize;
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
  .modal {
    > .details {
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
      .keywords {
        width: 90%;
      }
    }
  }
}
</style>
