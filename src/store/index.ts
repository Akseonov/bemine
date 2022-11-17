import {
	createStore,
	// createLogger,
} from 'vuex';

import { store as counter, CounterStore, State as CounterState } from "@/store/modules/counter";

export type RootState = {
	counter: CounterState;
};

export type Store = CounterStore<Pick<RootState, 'counter'>>;

// Plug in logger when in development environment
// const debug = process.env.NODE_ENV !== 'production';
// const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
	// plugins,
	modules: {
		counter,
	},
});

export function useStore(): Store {
	return store as Store;
}
