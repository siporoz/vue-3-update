<template>
	<div>
		<h1>{{ props.id }}</h1>
		<h1>{{ props.name }}</h1>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: number, name: string }>()
</script>

<style scoped>

</style>