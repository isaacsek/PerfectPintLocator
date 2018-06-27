import { FETCH_USER } from "../actions/types";

// auth will be null, false, or user
export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            // return false  is no user
            return action.payload || false;
        default:
            return state;
    }
}
