/**
 * Created by Jeffrey Doyle on 6/4/2017.
 */

const _default = {token: null, refresh: null};

function auth(state = _default, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                refresh: action.payload.refresh,
            };
        case 'LOGOUT':
            return  {
                ...state,
                token: null,
                refresh: null,
            };
        default:
            return state
    }
}

export default auth;