<template>
  <div class="extend-rule__container">
    <div class="extend-rule__container-header">
      <p class="extend-rule__container-header--title">
        Digite um número e veja a mágica!
      </p>
      <p class="extend-rule__container-header--subtitle">
        Sério é algo incrível!
      </p>
    </div>
    <div
      :class="[
        'extend-rule__container--success',
        {
          'extend-rule__container--error': !success,
        },
      ]"
    >
      <p v-if="success">{{ message.success }}</p>
      <p v-else>{{ message.error }}</p>
    </div>

    <button class="extend-rule__container-button" @click="incrementNumber">
      Clique {{ number }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExtendRule",
  data: () => ({
    number: 0,
    success: true,
    message: {
      success: "Parabéns, esse é um número par!",
      error: "Ops, esse é um número ímpar!",
    },
  }),
  methods: {
    incrementNumber() {
      this.number++;
      this.success = !this.success;
    },
  },
});
</script>

<style src="./ExtendRule.scss" lang="scss" scoped />
