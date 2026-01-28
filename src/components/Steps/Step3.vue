<script setup lang="ts">
defineEmits(['complete']);
</script>

<template>
  <StepContent @complete="$emit('complete')">
    <p>
      Заемщики подписывают согласия на получение данных из кредитного регистра и ФСЗН для формирования рейтинга
    </p>
  </StepContent>
</template>

<script lang="ts">
import StepContent from '../StepContent.vue';
</script>
