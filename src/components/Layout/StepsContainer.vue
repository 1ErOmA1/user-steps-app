<script setup lang="ts">
import StepsHeader from './StepsHeader.vue';
import { Transition, computed } from 'vue';

interface Step {
  id: number;
  title: string;
  status: 'disabled' | 'active' | 'completed';
  icon: string;
  iconDark?: string;
}

interface Props {
  steps: Step[];
  currentStepId: number;
  stepComponents: Record<number, any>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  complete: [];
}>();

const CurrentStep = computed(() => props.stepComponents[props.currentStepId]);
</script>

<template>
  <div class="steps-wrapper">
    <div class="steps-container">
      <StepsHeader :steps="steps" />

      <div class="step-content-wrapper">
        <Transition name="fade-step" mode="out-in">
          <component :is="CurrentStep" :key="currentStepId" @complete="emit('complete')" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps-wrapper {
  position: relative;
  max-width: 1153px;
  margin: auto;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
}

.step-content-wrapper {
  position: relative;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-step-enter-active,
.fade-step-leave-active {
  transition: opacity 0.35s ease;
}

.fade-step-enter-from,
.fade-step-leave-to {
  opacity: 0;
}

.fade-step-enter-to,
.fade-step-leave-from {
  opacity: 1;
}

@media (max-width: 1440px) {
  .steps-wrapper {
    max-width: 500px;
  }
}
</style>
