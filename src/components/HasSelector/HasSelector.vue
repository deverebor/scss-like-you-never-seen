<template>
  <section class="has-selector">
    <h1 class="has-selector__title">Has Selector</h1>
    <div v-if="success">
      <p class="has-selector__subtitle">{{ message.hasSubTitle }}</p>
    </div>
    <p v-else class="has-selector__subtitle">{{ message.hasParagraph }}</p>
    <button class="has-selector__button" @click="changeTag">
      Clique para mudar a tag
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HasSelector",
  data: () => ({
    success: true,
    message: {
      hasSubTitle: "Sim, existe um subtítulo!",
      hasParagraph: "Não, existe um paragrafo!",
    },
  }),
  methods: {
    changeTag() {
      this.success = !this.success;
    },
  },
});
</script>

<style src="./HasSelector.scss" lang="scss" scoped />
