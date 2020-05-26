const initState = false

const FlagSelectedReducer = (state = initState, action) => {
    switch(action.type) {
        case 'IS_SELECTED':
          return !state;
        default:
          return state;
    }
}

export default FlagSelectedReducer ;