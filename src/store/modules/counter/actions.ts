import { State } from './state';
import { Mutations } from "./mutations";
import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/store";
import { _CounterMutationTypes, _CounterActionTypes } from "./types";

type ArgumentActionContent = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
	[ _CounterActionTypes.FETCH_COUNTER ](
		{ commit }: ArgumentActionContent,
		someId: string,
	): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
	async [ _CounterActionTypes.FETCH_COUNTER ]({ commit }, someId: string) {
		return new Promise(() => {
			setTimeout(() => {
				console.debug('FETCH_Counter', someId);
				// const data = {
				// 	documents: [ {}, {} ],
				// };
				commit(_CounterMutationTypes.INCREMENT, undefined);
				return true;
			}, 500);
		});
	},
};
