import { combineReducers } from 'redux'
import DisplayReducer from './DisplayReducer'
import FlagReducer from './FlagReducer'

const allReducers = combineReducers({
    MediaAvailable: DisplayReducer,
    isMedia: FlagReducer,
})

export default allReducers