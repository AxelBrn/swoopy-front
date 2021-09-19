<template>
  <div
    :class="[{'outlined': outlined}, outlined ? (includeWidth() ?
      $attrs.class : 'w-content ' + $attrs.class) : '',
    ]"
  >
    <button
      :id="$attrs.id"
      class="cursor-pointer relative"
      :class="[outlined ? 'w-full' : $attrs.class, icon ? 'btn-icon' :
        outlined ? 'btn-outlined' : 'btn']"
      @click="$emit('click')"
    >
      <sw-loader :loading="loading" />
      <template v-if="!icon">
        <span :class="loading ? 'opacity-0' : ''">
          {{ label }}
        </span>
      </template>
      <template v-else>
        <f-icon :name="label" :class="loading ? 'opacity-0': 'w-8 h-8'"/>
      </template>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    includeWidth(): boolean {
      return (this.$attrs.class as string).includes('w-');
    },
  },
});
</script>

<style scoped>
  .btn {
    @apply flex justify-center items-center bg-gradient-to-r
    from-purple to-orange rounded-lg text-white font-semibold text-base py-2 px-5
    transform hover:scale-110 transition duration-500 ease-in-out;
  }
  .btn-icon {
    @apply flex justify-center items-center bg-light-grey text-white p-2.5 text-base rounded-lg
    transform hover:scale-110 transition duration-500 ease-in-out;
  }
  .btn-outlined {
    @apply flex justify-center items-center text-white font-semibold
    text-base py-2 px-5 bg-dark-grey rounded-lg;
  }
  .outlined {
    @apply p-[1px] bg-gradient-to-r from-purple to-orange rounded-lg transform
    hover:scale-110 transition duration-500 ease-in-out;
  }
  /*.btn-icon:hover svg {
    stroke: url(#gradient-horizontal) #BE4176;
  }*/
</style>
