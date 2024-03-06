<template>
	<div>
		<h1>{{ someValue }}</h1>
		<button @click="someValue += 1">inc</button>
		<button @click="someValue -= 1">dec</button>
	</div>
</template>

<script setup lang="ts">
const someValue = defineModel({ type: Number, default: 0 })
</script>

<style scoped>

</style>