import { AuthUnionType, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS,RESET_SIGNUP,SIGIN, SIGIN_SUCCESS, SIGIN_FAIL } from "../actions/auth_actions";

export interface AuthState {
    signup: {
        loaded: boolean,
        success: boolean,
        message: string
    },
    signin: {
        loaded: boolean,
        success: boolean,
        message: string
    }
}
const intialState: AuthState = {
    signup: {
        loaded: false,
        success: false,
        message: ''
    },
    signin: {
        loaded: false,
        success: false,
        message: ''
    }
}
export default function authReducer (state = intialState, action: AuthUnionType) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false
                }
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: true
                }
        }
        case SIGNUP_FAIL:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: false,
                    message: action.message
                }
        }
        case RESET_SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            }
        case SIGIN:
            return {
                ...state,
                signin: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            }
        case SIGIN_SUCCESS:
            return {
                ...state,
                signin: {
                    loaded: true,
                    success: true,
                    message: ''
                }
            }
        case SIGIN_FAIL:
            return {
                ...state,
                signin: {
                    loaded: true,
                    success: false,
                    message: ''
                }
            }
        default:
            return state;
    }
}