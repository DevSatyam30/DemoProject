import * as actionType from '../../type';
import * as helper from '../../../services/api'

export const postLogin = (data) => {
    return dispatch => {
        helper.post_req(data)
            .then(res => {
                console.log(res);
                dispatch({
                    type: actionType.POST_LOGIN_DETAILS_RESPONSE,
                    payload: res
                })
            }).catch(err => {
                console.log("Login error", err.response);
               
            })
    }
}