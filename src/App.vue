<template>
  <SubGrids />
  <hr />
  <ContainerQueries />
  <hr />
  <ExtendRule />
  <hr />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubGrids from "./components/SubGrids/SubGrids.vue";
import ContainerQueries from "./components/ContainerQueries/ContainerQueries.vue";
import ExtendRule from "./components/ExtendRule/ExtendRule.vue";

export default defineComponent({
  name: "App",
  components: {
    SubGrids,
    ContainerQueries,
    ExtendRule,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
