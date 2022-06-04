<template>
  <div class="subgrids">
    <div class="subgrids__container">
      Container
      <div class="subgrids__container-secondary">secondary</div>
      <div class="subgrids__container-tertiary">tertiary</div>
      <div class="subgrids__container-quaternary">quaternary</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubGrids",
});
</script>

<style src="./SubGrids.scss" scoped lang="scss" />
