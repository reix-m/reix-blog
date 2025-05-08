<template>
  <img :src="src" :width="15" v-if="src" />
  <i :class="`${icon} text-white`" v-if="icon"></i>
</template>

<script setup lang="ts">
type Props = {
  src?: string;
  icon?: string;
};

withDefaults(defineProps<Props>(), () => {
  src: null;
  icon: null;
});
</script>
