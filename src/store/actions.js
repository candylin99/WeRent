import * as types from './mutation-types'

const actions={
    userLogin({
        commit
    }, userInfo) {
        commit(types.LOGIN, userInfo);
    },
    
    getRentList({
        commit
    },houseinfo){
        commit(types.RECEIVE_SELECT_RENT,houseinfo);
    },

    delUserSession({
        commit }, data) {
        commit(types.DELSESSION, data);
    }, 
    userLoginout({
        commit }) {
        commit(types.LOGINOUT);
    }
     }
     
     

export default actions 