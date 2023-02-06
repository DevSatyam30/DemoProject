import { POST_LOGIN_DETAILS_RESPONSE } from '../../type';

const initialState = {
    postLoginDetailResponse: null
}

const postLogin = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOGIN_DETAILS_RESPONSE:
            return {
                ...state,
                postLoginDetailResponse: action.payload
            };
        default:
            return state
    }
}

export default postLogin;