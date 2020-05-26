import { combineReducers } from 'redux'
import DisplayReducer from './DisplayReducer'
import FlagReducer from './FlagReducer'
import SelectedReducer from './SeletedReducer'
import FlagSelectedReducer from './FlagSelectedReducer'

const allReducers = combineReducers({
    MediaAvailable: DisplayReducer,
    isMedia: FlagReducer,
    mediaSelected: SelectedReducer,
    isSelected: FlagSelectedReducer
})

export default allReducers