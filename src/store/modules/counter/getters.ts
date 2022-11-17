import { State } from "./state";
import { Counter } from "@/@types/counter";
import { GetterTree } from "vuex";
import { RootState } from "@/store";

export type Getters = {
	getCount(state: State): Counter
};

export const getters: GetterTree<State, RootState> & Getters = {
	getCount(state: State): Counter {
		return state.count;
	},
};
