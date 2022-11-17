import { removeNamespace } from '@/typescript/utilities/vuex';

export enum CounterGettersTypes {
	GET_COUNT = 'counter/GET_COUNT',
}

export enum CounterMutationTypes {
	INCREMENT = 'counter/INCREMENT',
}

export enum CounterActionTypes {
	FETCH_COUNTER = 'counter/FETCH_COUNTER',
}

export const _CounterGettersTypes  = removeNamespace('counter/', CounterGettersTypes);
export const _CounterMutationTypes  = removeNamespace('counter/', CounterMutationTypes);
export const _CounterActionTypes = removeNamespace('counter/', CounterActionTypes);
