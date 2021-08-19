import { App } from 'vue';
import SwInput from '@/components/library/SwInput.vue';
import SwLoader from '@/components/library/SwLoader.vue';
import SwButton from '@/components/library/SwButton.vue';
import SwForm from '@/components/library/SwForm.vue';
import FIcon from '@/components/library/FIcon.vue';

export default (app: App): void => {
  app.component('sw-input', SwInput);
  app.component('sw-loader', SwLoader);
  app.component('sw-btn', SwButton);
  app.component('sw-form', SwForm);
  app.component('f-icon', FIcon);
};
