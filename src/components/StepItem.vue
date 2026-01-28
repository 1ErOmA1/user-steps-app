<script setup lang="ts">
import checkIcon from '../assets/icons/check.svg';
import type { Step } from '../types/steps';
defineProps<{ step: Step }>();
</script>

<template>
  <div class="step-item">
    <div class="step-circle" :class="step.status">
      <img v-if="step.status === 'completed'" :src="checkIcon" alt="completed" class="check-icon" />
      <span v-else>{{ step.id }}</span>
    </div>
  </div>
</template>

<style scoped>
.step-item {
  display: flex;
  align-items: center;
  position: relative;
}

.step-circle {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  border-radius: 50%;
  border: 6px solid #b7b5be;
  background: #f5f4fb;
  font-family: 'Vela Sans', sans-serif;
  font-weight: 800;
  font-size: 25px;
  color: #b7b5be;
}

.step-circle.active {
  background: #f5f4fb;
  color: #f09038;
  border-color: #f09038;
}

.step-circle.completed {
  background: #00d9c5;
  color: #0e021e;
  border-color: #00d9c5;
}
</style>
