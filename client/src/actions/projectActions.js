import axios from 'axios';

import {
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_LOADING,
    CLEAR_CURRENT_PROJECT,
    GET_ERRORS,
    SET_CURRENT_USER
} from './types';

/*##########################################
   Get current project
#############################################*/
export const getCurrentProject = () => dispatch => {
    dispatch(setProjectLoading());
    axios
        .get('/api/projects')
        .then(res =>
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROJECT,
                payload: {}
            })
        );
};

/*##########################################
   Get project by handle
#############################################*/
export const getProjectByHandle = handle => dispatch => {
    dispatch(setProjectLoading());
    axios
        .get(`/api/projects/handle/${handle}`)
        .then(res =>
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROJECT,
                payload: null 
            })
        );
};

/*##########################################
   Create Project
#############################################*/
export const createProject = (projectData, history) => dispatch => {
    axios
        .post('/api/projects', projectData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/*##########################################
   Get all projects
#############################################*/
export const getProjects = () => dispatch => {
    dispatch(setProjectLoading());
    axios
        .get('/api/projects/all')
        .then(res =>
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROJECTS,
                payload: null
            })
        );
};

/*##########################################
   Delete account & project
#############################################*/
export const deleteAccount = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/projects')
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

/*##########################################
   Project loading
#############################################*/
export const setProjectLoading = () => {
    return {
        type: PROJECT_LOADING
    };
};

/*##########################################
   Clear project
#############################################*/
export const clearCurrentProject = () => {
    return {
        type: CLEAR_CURRENT_PROJECT
    };
};
