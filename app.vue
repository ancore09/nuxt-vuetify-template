<template>
  <div>
    <VBtn @click="add" icon>
      <VIcon>mdi-cloud</VIcon>
    </VBtn>
    <VBtn @click="desc">-</VBtn>
    <span>{{counter}}</span>
  </div>
</template>

<script setup lang="ts">
  const counter = useState('counter', () => 0)

  const add = () => {
    counter.value++;
  }

  const desc = () => {
    counter.value--;
  }
</script>
