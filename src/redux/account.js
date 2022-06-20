import data from '../Models/data'

const initialState = {
    data: data,
    isLogin: false
};

const LOGIN_USER = "LOGIN_USER";

export const loginUser = () => ({
    type: LOGIN_USER,
});


const ADD_USER = "ADD_USER";

export const addUser = (user) => ({
    type: ADD_USER,
    data: user
});


const reducerAccount = (state = initialState, action) => {
   
    switch (action.type){
        case LOGIN_USER:
            return {
                ...state,
                isLogin: true
            }
            break;

        case ADD_USER:
            //data.push(action.data);
            const stateNew = {
                ...state, 
                data: [...state.data, action.data]
            }
                

            console.log("Add: ", stateNew, "State", state);
            
            return stateNew;
        break;

        default:
            return state;
    }
}

export default reducerAccount;