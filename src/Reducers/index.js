import { combineReducers } from 'redux'
import DisplayReducer from './DisplayReducer'

const allReducers = combineReducers({
    MediaAvailable: DisplayReducer,
})

export default allReducers