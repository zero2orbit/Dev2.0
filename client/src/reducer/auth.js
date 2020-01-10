import { REGISTER_SUCCESS, REGISTER_FAIL, 
         USER_LOADED, AUTH_ERROR,
         LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT } from '../action/type'

const intialstate = {
    token: localStorage.getItem('token'),
    isAuthenticate: null,
    loading: null,
    user:null
}

export default function (state = intialstate, action) {
    const { type, payload } = action
    switch(type){

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticate: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                loading: false
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticate:true,
                loading:false,
                user:payload
            }

        default: 
            return state
    }
}