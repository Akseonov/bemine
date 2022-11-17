import { State } from "./state";
import { Counter } from "@/@types/counter";
import { GetterTree } from "vuex";
import { RootState } from "@/store";
import { _CounterGettersTypes } from "./types";

export type Getters = {
	[ _CounterGettersTypes.GET_COUNT ](state: State): Counter
};

export const getters: GetterTree<State, RootState> & Getters = {
	[ _CounterGettersTypes.GET_COUNT ](state: State): Counter {
		return state.count;
	},
};
