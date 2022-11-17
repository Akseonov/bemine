import { Counter } from "@/@types/counter";

export type State = {
	count: Counter;
};

export const state: State = {
	count: 1,
};
