<template>
  <div class="nesting-rule">
    <div class="nesting-rule__inner-step">
      <img
        width="60"
        height="60"
        class="nesting-rule__inner-icon"
        src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3281-thumb.png"
        alt="tree"
      />
    </div>

    <p class="nesting-rule__paragraph">Olá <stong>Mil reiz</stong> rsrs</p>
    <p class="nesting-rule__paragraph"><strong>Joaninha Templaria</strong> rsrs</p>
    <p class="nesting-rule__paragraph">Olá <strong>Calt biruta</strong> rsrs</p>
    <p class="nesting-rule__paragraph"><strong> Erebor maluco</strong> rsrs</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NestingRule",
});
</script>

<style src="./NestingRule.scss" lang="scss" scoped></style>
