import { State } from './state';
import { Mutations } from "./mutations";
import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/store";

type ArgumentActionContent = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
	fetchCounter(
		{ commit }: ArgumentActionContent,
		someId: string,
	): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
	async fetchCounter({ commit }, someId: string) {
		return new Promise(() => {
			setTimeout(() => {
				console.debug('FETCH_Counter', someId);
				commit('increment', undefined);
				return true;
			}, 500);
		});
	},
};
