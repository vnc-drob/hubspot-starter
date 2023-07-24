<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const message = ref('Hello vue!');

const requestOptions = {
  'method': 'GET',
  'headers': {
      'Content-Type': 'application/json',
   }
};

onMounted(() => {
  fetch("https://140450665.hs-sites-eu1.com//_hcms/api/congratulation", requestOptions)
    .then(response => response.text())
    .then(response => message.value = response)
    .catch(error => console.log('error', error));
});

const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>
  <p>{{ message }}</p>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
