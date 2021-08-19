<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-6/12 h-3/6 flex bg-dark-grey rounded-lg shadow-lg">
      <div class="bg-gradient-to-tr from-purple to-orange rounded-lg w-6/12 h-6/6">
      <img
        class="w-12/12 h-6/6"
        alt="MCD Example"
        :src="require('../assets/images/mcd-example.png')"
      />
      </div>
      <div class="w-6/12 h-6/6 flex flex-col items-center p-8 relative">
        <img
          class="w-6/12"
          alt="Logo Swoopy"
          :src="require('../assets/logo.png')"
        />
        <sw-form ref="form" class="my-5">
          <sw-input
            v-model="inputValue"
            placeholder="test"
            :rules="[(v) => !!v || 'Le champ est obligatoire']"
          />
          <sw-btn
            class="mt-2"
            label="download"
            :loading="loading"
            @click="test"
          />
        </sw-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      loading: false,
      inputValue: '',
    };
  },
  methods: {
    test() {
      console.log((this.$refs.form as any).validate());
      this.loading = !this.loading;
    },
  },
});
</script>
