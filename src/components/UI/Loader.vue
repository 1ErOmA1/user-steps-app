<template>
  <div class="loader-wrapper">
    <div class="progress">
      <span v-for="n in 4" :key="n" class="dot" />
    </div>
    <p class="text">Загрузка шагов…</p>
  </div>
</template>

<style scoped>
.loader-wrapper {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.progress {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #1dd1a1;
  animation: pulse 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}
.dot:nth-child(2) {
  animation-delay: -0.16s;
}
.dot:nth-child(3) {
  animation-delay: 0s;
}
.dot:nth-child(4) {
  animation-delay: 0.16s;
}

@keyframes pulse {
  0%,
  80%,
  100% {
    transform: scale(0.4);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.text {
  font-size: 14px;
  color: #a0a0a0;
}
</style>
