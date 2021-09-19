<template>
  <div id="box">
    <div
      class="p-[1px] bg-gradient-to-r from-purple to-orange rounded-[12px] relative"
      :class="{'bg-gradient-to-r from-[red] to-[red]': isErrored.error && count > 0}"
    >
      <f-icon
        v-if="prependIcon !== ''"
        class="absolute left-3 z-10 top-[18%] select-none"
        :name="prependIcon"
      />
      <input
        class="rounded-[12px] bg-dark-grey placeholder-opacity-0 placeholder-white
        h-10 px-1 transition duration-300 ease-linear
        focus:bg-opacity-75 focus:placeholder-opacity-75"
        :class="prependIcon !== '' ? 'pl-10' : ''"
        :type="type"
        :value="modelValue"
        :loading="true"
        :placeholder="placeholder"
        @blur="count++"
        @input="this.$emit('update:modelValue', $event.target.value)"
      />
      <label class="label absolute pointer-events-none
      top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        {{ label }}
      </label>
    </div>
    <div
      class="test inline-flex overflow-hidden truncate text-[red]"
      :class="isErrored.error && count > 0
      ? width.concat(' h-auto')
      : 'w-0 h-0'">
      {{ isErrored.message}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  inject: ['form'],
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String || Number,
      default: '',
    },
    placeholder: {
      type: String,
      default: ' ',
    },
    label: {
      type: String,
      default: '',
    },
    rules: {
      type: Array as PropType<CallableFunction[]>,
      default: () => [],
    },
    type: {
      type: String,
      default: 'text',
    },
    prependIcon: {
      type: String,
      default: '',
    },
  },
  created() {
    (this as any).form.register(this);
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    isErrored() {
      let error = false;
      let message = '';
      let counter = 0;
      while (!error && counter < this.rules.length) {
        const result = this.rules[counter](this.modelValue);
        if (typeof result === 'string') {
          message = result;
          error = true;
        }
        counter += 1;
      }
      return { error, message };
    },
    width() {
      const box = document.getElementById('box')?.getBoundingClientRect();
      console.log('width:', box?.width);
      return 'w-['.concat((box?.width.toString() || ''), 'px', ']');
    },
  },
  methods: {
    checkError(): boolean {
      this.count = 1;
      return this.isErrored.error;
    },
  },
});
</script>

<style scoped>
  .label {
    transition: all 300ms linear;
  }
  .test {
    transition: all 300ms linear;
  }
  input:focus + label, input:not(:placeholder-shown) + label {
    @apply transform translate-y-0 translate-x-0 top-[-25px] left-0;
  }
</style>
