import axios from 'axios'
import { setAlert } from './alert_action'
import { GET_PROFILE, PROFILE_ERROR } from './type'

// GET Current User Profile
export const getCurrentProfile = () => async dispatch =>{
    try {
        const getMe = await axios.get('api/profile/me')
        dispatch({
            type: GET_PROFILE,
            payload: getMe.data
        })
        
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
    }
}

// Create Profile and Update
export const createProfile = (formdata, history, edit = false, ) => async dispatch =>{

    try {
        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formdata, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'))
        if (!edit) {
            history.push('/dashbord')
        }
    } catch (err) {
        const errors = err.response.data.error;
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
    }
}