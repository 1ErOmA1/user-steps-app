<script setup lang="ts">
defineEmits(['complete']);
</script>

<template>
  <StepContent @complete="$emit('complete')">
    <p>
      Участники сервиса проходят обязательную идентификацию с использованием МСИ (Межбанковской системы идентификации)
    </p>
  </StepContent>
</template>

<script lang="ts">
import StepContent from '../StepContent.vue';
</script>
