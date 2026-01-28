<script setup lang="ts">
import StepsLoader from './components/UI/Loader.vue';
import StepsContainer from './components/Layout/StepsContainer.vue';
import { onMounted } from 'vue';
import { useStepsStore } from './store/steps';
import Step1 from './components/Steps/Step1.vue';
import Step2 from './components/Steps/Step2.vue';
import Step3 from './components/Steps/Step3.vue';
import Step4 from './components/Steps/Step4.vue';

const store = useStepsStore();

const stepComponents: Record<number, any> = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
};

onMounted(async () => {
  await store.loadSteps();
});
</script>

<template>
  <div class="app-container">
    <StepsLoader v-if="store.loading" />

    <StepsContainer
      v-else
      :steps="store.steps"
      :current-step-id="store.currentStepId"
      :step-components="stepComponents"
      @complete="store.completeCurrentStep"
    />
  </div>
</template>

<style scoped>
:global(body) {
  background-color: #f5f4fb;
  font-family: 'Vela Sans', sans-serif;
}

.app-container {
  max-width: 1520px;
  margin: auto;
  padding: 40px;
}
</style>
