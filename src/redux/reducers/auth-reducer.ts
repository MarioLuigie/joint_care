import { actions as type } from "@/lib/constants"

export interface AuthState {
  isLogout: boolean
}

interface AuthAction {
  type: string
  data?: any
}

const initState: AuthState = {
  isLogout: false
}

const authReducer = (state: AuthState = initState, action: AuthAction): AuthState => {
  switch (action.type) {

    case type.LOGOUT:
      return { ...state, isLogout: true }

    default:
      return state
  }
}

export default authReducer;
