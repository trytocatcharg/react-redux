import * as types from './actionTypes';
import * as authorsApi from '../../api/authorApi';


export function loadAuthorsSuccess (authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function (dispatch) {
        return authorsApi.getAuthors().then((c) => {
            dispatch(loadAuthorsSuccess(c));
        }).catch(err => {
            throw err;
        })
    }
}