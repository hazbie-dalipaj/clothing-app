import { UserActionTypes } from './user-types';

const INITINAL_STATE = {
    currentUser: null
}

const UserReducter = ( state = INITINAL_STATE, action ) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER: 
        return{
            ...state,
            currentUser: action.payload
        }
        default:
            return state;
    }
}
export default UserReducter;