<template>
  <div class="scroll-snap">
    <div class="scroll-snap__area">1</div>
    <div class="scroll-snap__area">2</div>
    <div class="scroll-snap__area">3</div>
    <div class="scroll-snap__area">4</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollSnap",
  setup() {
    return {};
  },
});
</script>

<style src="./ScrollSnap.scss" lang="scss" scoped />
