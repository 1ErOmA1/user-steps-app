import { defineStore } from 'pinia';
import type { Step } from '../types/steps';

export const useStepsStore = defineStore('steps', {
  state: () => ({
    loading: true,
    currentStepId: 1,
    steps: [
      {
        id: 1,
        title: 'Пройдите идентификацию',
        status: 'active' as const,
        icon: new URL('../assets/icons/id.svg', import.meta.url).href,
      },
      {
        id: 2,
        title: 'Заполните анкету',
        status: 'disabled' as const,
        icon: new URL('../assets/icons/form.svg', import.meta.url).href,
        iconDark: new URL('../assets/icons/form-dark.svg', import.meta.url).href,
      },
      {
        id: 3,
        title: 'Подпишите согласия',
        status: 'disabled' as const,
        icon: new URL('../assets/icons/consent.svg', import.meta.url).href,
        iconDark: new URL('../assets/icons/consent-dark.svg', import.meta.url).href,
      },
      {
        id: 4,
        title: 'Привяжите карту',
        status: 'disabled' as const,
        icon: new URL('../assets/icons/card.svg', import.meta.url).href,
        iconDark: new URL('../assets/icons/card-dark.svg', import.meta.url).href,
      },
    ] as Step[],
  }),
  getters: {
    currentStep(state) {
      return state.steps.find((s) => s.id === state.currentStepId);
    },
  },
  actions: {
    loadSteps() {
      setTimeout(() => (this.loading = false), 1000);
    },
    completeCurrentStep() {
      const index = this.steps.findIndex((s) => s.id === this.currentStepId);
      this.steps[index].status = 'completed';
      if (this.steps[index + 1]) {
        this.steps[index + 1].status = 'active';
        this.currentStepId = this.steps[index + 1].id;
      }
    },
  },
});
