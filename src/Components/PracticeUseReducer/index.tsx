import { useReducer } from "react";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const { type } = action;
    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Maximum reached" : null
            };
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Minimum Reached" : null
            };
        }
        default:
            return state;
    }
}

const DemoUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });
    return (
        <div>
            <div>Count: {state.count}</div>
            {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
            <button className="mb-2 bg-red-600 mr-5" onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button className="bg-green-500" onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
        </div>
    );
}

export default DemoUseReducer;
