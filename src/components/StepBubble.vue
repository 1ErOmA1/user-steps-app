<script setup lang="ts">
import { computed } from 'vue';
import type { Step } from '../types/steps';
import arrowIcon from '../assets/icons/arrow.svg';
import arrowDarkIcon from '../assets/icons/arrow-dark.svg';

interface Props {
  step: Step;
  isActive?: boolean;
  isCompleted?: boolean;
}

const props = defineProps<Props>();

function getStepIcon(step: Step) {
  if (step.status === 'active' || step.status === 'completed') {
    return step.icon;
  }
  return step.iconDark ?? step.icon;
}

const stepIndicatorIcon = computed(() => {
  if (props.isActive || props.isCompleted) return arrowIcon;
  return arrowDarkIcon;
});

const bubbleClasses = computed(() => ({
  bubble: true,
  'bubble--active': props.isActive,
  'bubble--completed': props.isCompleted,
}));
</script>

<template>
  <div :class="bubbleClasses">
    <img v-if="isActive" src="../assets/icons/warning.svg" alt="" class="bubble-active-icon" />
    <div class="bubble-header">
      <img :src="getStepIcon(step)" alt="" class="bubble-icon" />
      <span class="bubble-title">{{ step.title }}</span>
      <img class="bubble-step-indicator" :src="stepIndicatorIcon" alt="" />
    </div>

    <button class="bubble-button">Подробнее</button>
  </div>
</template>

<style scoped>
.bubble {
  width: 265px;
  height: 87px;
  position: absolute;
  bottom: calc(100% + 8px);
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background: #fff;
  border-radius: 15px;
  border: 3px solid #b7b5be;
  font-size: 20px;
  font-weight: 600;
  color: #0e021e;
  box-shadow: 0 20px 50px rgba(210, 214, 219, 0.46);
  z-index: 5;
}

.bubble::before,
.bubble::after {
  left: 50%;
  transform: translateX(-50%);
}

.bubble::after {
  content: '';
  position: absolute;
  top: calc(100% - 1px);
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #fff;
  z-index: 2;
}

.bubble::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 23px solid transparent;
  border-right: 23px solid transparent;
  border-top: 23px solid #b7b5be;
  z-index: 1;
}

.bubble-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.bubble-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.bubble-title {
  font-weight: 600;
  font-size: 20px;
}

.bubble-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  border: none;
  color: #b7b5be;
  background-color: #fff;
  cursor: pointer;
  transition: color 0.25s ease;
}

.bubble-button:hover {
  color: #00bfa0;
}

.bubble--active {
  border-color: #f09038;
  box-shadow: 0 20px 50px rgba(210, 214, 219, 0.55);
}

.bubble--active::before {
  border-top-color: #f09038;
}

.bubble-active-icon {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 35px;
  height: 30px;
  opacity: 0;
  transform: scale(0.8);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.bubble--active .bubble-active-icon {
  opacity: 1;
  transform: scale(1);
}

.bubble--completed {
  border: none;
  box-shadow: 0 20px 50px rgba(210, 214, 219, 0.3);
}

.bubble--completed::before {
  display: none;
}

.bubble--completed .bubble-button {
  color: #d0cfd6;
  cursor: default;
  pointer-events: none;
}

.bubble {
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.bubble-step-indicator {
  display: none;
  width: 20px;
  height: 20px;
  margin-left: auto;
}

@media (max-width: 1440px) {
  .bubble-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
    margin-bottom: 0;
  }

  .bubble {
    height: 50px;
    position: absolute;
    left: 92px;
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100vw - 80px);
    max-width: 260px;
    padding: 20px 30px;
  }

  .bubble::before {
    left: -50px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 28px solid #b7b5be;
  }

  .bubble::after {
    left: -41px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-right: 23px solid #fff;
  }

  .bubble--active::before {
    border-right-color: #f09038;
  }

  .bubble-button {
    display: none;
  }

  .bubble-active-icon {
    display: none;
  }

  .bubble-header {
    justify-content: flex-start;
  }

  .bubble-step-indicator {
    display: block;
  }
}
</style>
