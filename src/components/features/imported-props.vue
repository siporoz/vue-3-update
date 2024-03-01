<template>
	<div>
		<p>{{ props.name }}</p>
		<p>{{ props.age }}</p>
		<p>{{ props.extraProp }}</p>
	</div>
</template>

<script setup lang="ts">
import type { User } from '../types/user'

const props = defineProps<User & { extraProp?: string }>()
</script>

<style scoped>

</style>
