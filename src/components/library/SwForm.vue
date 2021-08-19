<template>
  <form @submit.prevent>
    <div ref="slot">
      <slot></slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SwInput from '@/components/library/SwInput.vue';

type SwInputInstance = InstanceType<typeof SwInput>

export default defineComponent({
  provide() {
    return { form: this };
  },
  data() {
    return {
      inputs: [] as SwInputInstance[],
    };
  },
  methods: {
    validate() {
      const boolArray: boolean[] = [];
      for (let i = 0; i < this.inputs.length; i += 1) {
        boolArray.push(this.inputs[i].checkError());
      }
      return !boolArray.includes(true);
    },
    register(input: SwInputInstance): void {
      this.inputs.push(input);
    },
  },
});
</script>

<style>
</style>
