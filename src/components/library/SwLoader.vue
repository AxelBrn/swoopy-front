<template>
  <div
    class="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center"
    :class="!loading ? 'hidden' : ''"
  >
    <f-icon
      :class="loading ? 'animate-spin' : ''"
      name="loader"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style>

</style>
