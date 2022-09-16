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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NestingRule",
});
</script>

<style src="./NestingRule.scss" lang="scss" scoped></style>
