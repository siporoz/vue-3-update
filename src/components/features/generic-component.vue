<!-- https://blog.vuejs.org/posts/vue-3-3#generic-components -->
<template>
	<div>
		<div>{{ props.name }}</div>
		<div>{{ props.age.name }}</div>
	</div>
</template>

<script setup lang="ts" generic="T extends string | number, B extends User">
import type { User } from '../types/user'

const props = defineProps<{
  name: T
  age: B
}>()
</script>

<style scoped>

</style>