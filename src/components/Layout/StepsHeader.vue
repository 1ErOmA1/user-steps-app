<script setup lang="ts">
import StepItem from '../StepItem.vue';
import Bubble from '../StepBubble.vue';
import StepLine from '../StepLine.vue';
import type { Step } from '../../types/steps';

interface Props {
  steps: Step[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="steps-header">
    <template v-for="(step, index) in steps" :key="step.id">
      <div class="step-wrapper">
        <Bubble
          :step="step"
          :is-active="step.status === 'active'"
          :is-completed="step.status === 'completed'"
        />
        <StepItem :step="step" />
      </div>

      <StepLine
        :current-step-status="step.status"
        :next-step-status="steps[index + 1]?.status"
        :is-last="index === steps.length - 1"
      />
    </template>
  </div>
</template>

<style scoped>
.steps-header {
  margin-top: 160px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.step-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}

@media (max-width: 1440px) {
  .steps-header {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    gap: 40px;
  }

  .step-wrapper {
    justify-content: flex-start;
    width: 100%;
  }
}
</style>
