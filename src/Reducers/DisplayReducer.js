const initState = {}

const DisplayReducer = (state = initState, action) => {
    switch(action.type) {
        case 'MEDIA_AVAILABLE':
          return action.payload;
        default:
          return state;
    }
}

export default DisplayReducer;