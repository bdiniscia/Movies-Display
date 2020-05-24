const initState = false

const FlagReducer = (state = initState, action) => {
    switch(action.type) {
        case 'IS_MEDIA':
          return true;
        default:
          return state;
    }
}

export default FlagReducer ;