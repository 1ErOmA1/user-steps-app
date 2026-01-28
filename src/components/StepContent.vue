<script setup lang="ts">
defineEmits(['complete']);
</script>

<template>
  <div class="step-content">
    <div class="content">
      <slot></slot>
    </div>
    <button @click="$emit('complete')">Завершить шаг</button>
  </div>
</template>

<style scoped>
.step-content {
  width: 250px;
  min-height: 230px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 20px 50px rgba(209, 214, 219, 0.46);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #00d9c5;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  align-self: flex-start;
}
</style>
