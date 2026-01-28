<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';

interface Props {
  currentStepStatus: string;
  nextStepStatus: string;
  isLast: boolean;
}

const props = defineProps<Props>();

const segmentsCount = ref(window.innerWidth < 1440 ? 2 : 7);

const updateSegmentsCount = () => {
  segmentsCount.value = window.innerWidth < 1440 ? 2 : 7;
};

onMounted(async () => {
  window.addEventListener('resize', updateSegmentsCount);

  nextTick(() => {
    const spans = document.querySelectorAll('.step-line span.green, .step-line span.orange');
    spans.forEach((el) => {
      requestAnimationFrame(() => {
        el.classList.add('animate');
      });
    });
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', updateSegmentsCount);
});
</script>

<template>
  <div v-if="!isLast" class="step-line">
    <span
      v-for="n in segmentsCount"
      :key="n"
      :class="{
        green: currentStepStatus === 'completed',
        orange: nextStepStatus === 'active',
      }"
    ></span>
  </div>
</template>

<style scoped>
.step-line {
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 6px;
}

.step-line span {
  display: inline-block;
  height: 6px;
  border-radius: 3px;
  margin-right: 18px;
  background-color: #b7b5be;
  background-image: repeating-linear-gradient(to right, #b7b5be 0 36px, transparent 36px 61px);
}

.step-line span:first-child,
.step-line span:last-child {
  width: 15px;
}

.step-line span:not(:first-child):not(:last-child) {
  width: 30px;
}

.step-line span:last-child {
  margin-right: 0;
}

.step-line span.green {
  background-color: #00d9c5;
  background-image: none !important;
  width: 69px;
  flex: 1;
  height: 6px;
  border-radius: 0px;
  margin: 0;
}

.step-line span.green:last-child {
  border-radius: 0 3px 3px 0;
}

.step-line span.green:first-child {
  border-radius: 3px 0 0 3px;
}

.step-line span.orange {
  display: inline-block;
  height: 6px;
  border-radius: 3px;
  margin-right: 18px;
  background-color: #f09038;
  background-image: repeating-linear-gradient(to right, #f09038 0 36px, transparent 36px 61px);
}

.step-line span.orange:first-child,
.step-line span.orange:last-child {
  width: 15px;
  border-radius: 3px;
}

.step-line span.orange:not(:first-child):not(:last-child) {
  width: 30px;
}

.step-line span.orange:last-child {
  margin-right: 0;
}

@media (max-width: 1440px) {
  .step-line {
    width: 14px;
    flex-direction: column;
  }

  .step-line span {
    width: 7px !important;
    height: 25px;
    margin: 0;
    margin-bottom: 25px;
  }

  .step-line span:last-child {
    margin: 0;
  }

  .step-line span.green {
    width: 7px;
    margin: 0;
    margin-bottom: 0px;
    flex: 1;
    min-height: 37px;
    background-color: #00d9c5;
    border-radius: 0px;
  }

  .step-line span.green:last-child {
    border-radius: 0 0 3px 3px;
  }

  .step-line span.green:first-child {
    border-radius: 3px 3px 0 0;
  }

  .step-line span.orange {
    width: 7px;
    height: 25px;
    margin: 0;
    margin-bottom: 25px;
    flex: 1;
    min-height: 25px;
    background-color: #f09038;
  }

  .step-line span.orange:last-child,
  .step-line span.green:last-child {
    margin: 0;
  }
}
</style>
