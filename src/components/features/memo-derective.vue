<!-- DOCS: https://v3.ru.vuejs.org/ru/api/directives.html#v-memo -->
<template>
	<div @click="mix">mix</div>
	<div>{{ valueC }}</div>
	<div v-memo="[valueA, valueB]">
		<div>{{ valueA }}</div>
		<div>{{ valueB }}</div>
		<div>{{ valueC }}</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const valueA = ref(1)
const valueB = ref(2)
const valueC = ref(3)

const mix = () => {
	valueA.value = 1;
	valueB.value = 2;
	valueC.value = 6;
}
</script>

<style scoped>

</style>