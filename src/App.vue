<script setup lang="ts">
import { ref } from 'vue'
// import TestComponent from './components/features/style-variables.vue'
// import MemoDerective from './components/features/memo-derective.vue'
// import EffectScope from './components/features/effect-scope.vue'
// import WatchEffect from './components/features/watch-effect.vue'
// import ImportedProps from './components/features/imported-props.vue'
// import GenericComponent from './components/features/generic-component.vue'
import DefineModel from './components/features/define-model.vue'

const difModel = ref(1)
</script>

<template>
  <main>
		<!-- <TestComponent /> -->
		<!-- <MemoDerective /> -->
		<!-- <EffectScope /> -->
		<!-- <WatchEffect /> -->
		<!-- <ImportedProps
			name="fwef"
			:age="123"
			extraProp="fwef"
		/> -->
		<!-- <GenericComponent name="fsff" :age="{ name: 'fwefw', age: 1 }" /> -->
		<DefineModel v-model="difModel" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
