import {combineReducers} from "redux";
import cards from "./cards";

const rootReducer = combineReducers({
    cards,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>