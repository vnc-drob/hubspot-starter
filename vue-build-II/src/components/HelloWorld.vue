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
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
