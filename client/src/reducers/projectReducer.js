import {
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_LOADING,
    CLEAR_CURRENT_PROJECT
} from '../actions/types';

const initialState = {
    project: null,
    projects: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case PROJECT_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROJECT:
            return {
                ...state,
                project: null
            };
        default:
            return state;
    }
}
