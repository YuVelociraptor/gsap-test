<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const box = ref(null)
const box2 = ref(null)
const box3 = ref(null)

onMounted(() => {
  gsap.to(box.value, {
    x: 200,
    duration: 1,
    rotation: 360,
    ease: 'power2.out'
  })

  gsap.to(box2.value, {
    x: 300,
    duration: 1,
    rotation: 360,
    ease: 'power2.out',
  })

  gsap.to(box3.value, {
    x: 400,
    duration: 2,
    rotation: 1080,
    ease: 'power2.out',
  })
})
</script>

<template>
  <div ref="box" class="box"></div>
  <div ref="box2" class="box"></div>
  <div ref="box3" class="box"></div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: coral;
}
</style>