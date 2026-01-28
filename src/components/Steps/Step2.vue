<script setup lang="ts">
defineEmits(['complete']);
</script>

<template>
  <StepContent @complete="$emit('complete')">
    <p>
      Для заемщика обязательны к заполнению общие, а также дополнительные сведения для формирования рейтинга
    </p>
  </StepContent>
</template>

<script lang="ts">
import StepContent from '../StepContent.vue';
</script>
