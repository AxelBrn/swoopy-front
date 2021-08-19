<template>
  <div v-html="iconSvg"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Feather from 'feather-icons';

export default defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconSvg(): string {
      return Feather.icons[this.name].toSvg({ class: this.$attrs.class });
    },
  },
});
</script>
