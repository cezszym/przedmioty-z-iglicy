<template>
  <div class="loadingWrapper">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <h2>
        Ładowanie przedmiotów...
      </h2>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.loadingWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 120px 0;
}
.loading {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid $white;
  pointer-events: none;
  animation: animate 5s linear infinite;
}
.loading span:nth-child(1) {
  border-radius: 60% 40% 21% 79% / 35% 55% 45% 65%;
}
.loading span:nth-child(2) {
  animation-direction: reverse;
  border-radius: 50% 50% 51% 49% / 68% 68% 32% 32%;
}
.loading span:nth-child(3) {
  animation-duration: 3s;
  border-radius: 32% 68% 32% 68% / 43% 47% 53% 57%;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading h2 {
  font-size: $regular;
  width: 70%;
  text-align: center;
}
@media (max-width: 700px) {
  .loadingWrapper {
    margin: 120px 0;
  }
  .loading {
    width: 250px;
    height: 250px;
  }
  .loading h2 {
    width: 60%;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
