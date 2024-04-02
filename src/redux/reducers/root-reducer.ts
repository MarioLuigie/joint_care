import { combineReducers, Reducer } from "redux"
import { AuthState } from "@/redux/reducers/auth-reducer"
import authReducer  from "@/redux/reducers/auth-reducer"

interface RootState {
  auth: AuthState
}

const rootReducer: Reducer<RootState> = combineReducers({
  auth: authReducer
})

export default rootReducer
