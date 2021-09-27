<template>
  <footer class="basePadding">
    <p class="label">Autor strony:</p>
    <p>
      Cezary Szymański (github:
      <a
        href="https://github.com/cezszym"
        rel="norefferer noopenner"
        target="_blank"
        >cezszym</a
      >
      )
    </p>
    <p class="label">Jeśli chcesz się podzielić opinią o tej stronie napisz:</p>
    <a href="mailto:cezszym@protonmail.com">cezszym@protonmail.com</a>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: $gray;
  padding-top: 80px;
  padding-bottom: 50px;
  .label {
    font-weight: 700;
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 20px;
  }
  a {
    color: $yellow;
  }
}
</style>
