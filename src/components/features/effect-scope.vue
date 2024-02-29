<template>
	<div>
		<div>{{ counter }}</div>
		<div @click="counter += 1">INCTREMENT</div>
		<div @click="stop">STOP</div>
	</div>
</template>

<script setup lang="ts">
import { computed, effectScope, ref, watch, watchEffect } from 'vue';

const scope = effectScope()

const counter = ref(2)

scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})


const stop = () => {
	scope.stop()
}
</script>

<style scoped>

</style>
