<template>
	<h2>{{ getCount }}</h2>
	<button @click.prevent="increment">increment</button>
	<br>
	<button @click.prevent="fetchCounter">fetch increment</button>
	<hello-world/>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import {
	mapGetters,
	mapMutations,
} from 'vuex';

import { useStore } from '@/store';

const HelloWorld = defineAsyncComponent(() => import('@/components/HelloWorld.vue'));

export default defineComponent({
	name: "MainView",
	components: {
		HelloWorld,
	},
	setup() {
		const store = useStore();

		async function fetchCounter() {
			try {
				await store.dispatch("counter/fetchCounter", '1');
			} catch (error) {
				console.error('fetchDocuments', error);
			}
		}

		return {
			fetchCounter,
		};
	},
	computed: {
		...mapGetters('counter', [ 'getCount' ]),
	},
	methods: {
		...mapMutations('counter', [ 'increment' ]),
	},
});
</script>
