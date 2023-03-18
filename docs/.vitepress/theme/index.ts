import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, watch } from 'vue';
import mediumZoom from 'medium-zoom';

import './index.css';
import { inBrowser, useRoute } from 'vitepress';

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      const route = useRoute();
      watch(
        () => route.path,
        () =>
          nextTick(() => {
            if (inBrowser) mediumZoom(':not(a) > img', { background: 'rgba(0, 0, 0, .5)' });
          }),
        { immediate: true }
      );
    });
  },
};
