<template>
  <div class="accent-color">
    <form class="accent-color__form" action="/foo.bar">
      <div>
        <p>Select your favorite LOTR character</p>
        <input type="radio" id="frodo" name="type" value="frodo" />
        <label for="frodo">Frodo Baggins</label><br />
        <input type="radio" id="galadriel" name="type" value="galadriel" />
        <label for="galadriel">Galadriel</label><br />
        <input type="radio" id="thorin" name="type" value="thorin" />
        <label for="thorin">Thorin Oakenshield</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccentColor",
  setup() {
    return {};
  },
});
</script>

<style src="./AccentColor.scss" lang="scss" scoped />
