import { State } from './state';
import { MutationTree } from "vuex";

export type Mutations<S = State> = {
	increment(state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
	increment(state: State): void {
		state.count++;
	},
};
