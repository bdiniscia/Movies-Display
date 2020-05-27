const initState = 0

const CounterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
    }
}

export default CounterReducer;