const initState = {}

const SelectedReducer = (state = initState, action) => {
    switch(action.type) {
        case 'MEDIA_SELECTED':
          return action.payload;
        default:
          return state;
    }
}

export default SelectedReducer;