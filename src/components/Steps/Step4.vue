<script setup lang="ts">
defineEmits(['complete']);
</script>

<template>
  <StepContent @complete="$emit('complete')">
    <p>
      Для возможности полноценного использования функциональность сервиса необходимо привязать карту
    </p>
  </StepContent>
</template>

<script lang="ts">
import StepContent from '../StepContent.vue';
</script>
