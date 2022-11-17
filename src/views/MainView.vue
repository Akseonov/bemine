<template>
	<h2>{{ GET_COUNT }}</h2>
	<button @click.prevent="INCREMENT">increment</button>
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
import { CounterActionTypes } from '@/store/modules/counter/types';

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
				await store.dispatch(CounterActionTypes.FETCH_COUNTER, '1');
			} catch (error) {
				console.error('fetchDocuments', error);
			}
		}

		return {
			fetchCounter,
		};
	},
	computed: {
		...mapGetters('counter', [ 'GET_COUNT' ]),
	},
	methods: {
		...mapMutations('counter', [ 'INCREMENT' ]),
	},
});
</script>
