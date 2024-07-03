import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 435,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 434 });
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 435,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 436 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
