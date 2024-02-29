<template>
	<div>
		<div>{{ value }}</div>
		<button @click="inc">inc</button>
	</div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const value = ref(1);

const inc = () => {
	value.value += 1
}

watchEffect(() => {
	console.log(`Что-то произошло с значением ${value.value}`)
})
</script>

<style scoped>

</style>