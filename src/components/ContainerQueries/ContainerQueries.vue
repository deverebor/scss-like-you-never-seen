<template>
  <main class="container-wrapper">
    <div class="container">
      <h1 class="container__title">Titulo</h1>
      <h3 class="container__subtitle">SubTitulo</h3>
      <p class="container__description">Descrição</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerQueries",
});
</script>

<style src="./ContainerQueries.scss" lang="scss" scoped />
