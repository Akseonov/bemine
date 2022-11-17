import { State } from './state';
import { _CounterMutationTypes } from './types';
import { MutationTree } from "vuex";

export type Mutations<S = State> = {
	[ _CounterMutationTypes.INCREMENT ](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
	[ _CounterMutationTypes.INCREMENT ](state: State): void {
		state.count++;
	},
};
