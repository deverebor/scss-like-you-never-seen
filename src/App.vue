<template>
  <SubGrids />
  <hr />
  <ContainerQueries />
  <hr />
  <ExtendRule />
  <hr />
  <LayerRule />
  <hr />
  <HasSelector />
  <hr />
  <AccentColor />
  <hr />
  <ScrollSnap />
  <hr />
  <NestingRule />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubGrids from "./components/SubGrids/SubGrids.vue";
import ContainerQueries from "./components/ContainerQueries/ContainerQueries.vue";
import ExtendRule from "./components/ExtendRule/ExtendRule.vue";
import LayerRule from "./components/LayerRule/LayerRule.vue";
import HasSelector from "./components/HasSelector/HasSelector.vue";
import AccentColor from "./components/AccentColor/AccentColor.vue";
import ScrollSnap from "./components/ScrollSnap/ScrollSnap.vue";
import NestingRule from "./components/NestingRule/NestingRule.vue";

export default defineComponent({
  name: "App",
  components: {
    SubGrids,
    ContainerQueries,
    ExtendRule,
    LayerRule,
    HasSelector,
    AccentColor,
    ScrollSnap,
    NestingRule,
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
