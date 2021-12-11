const initialState = {
    email: null,
    token: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_EMAIL':
            return {
                ...state, email: action.email
            }
        case 'SET_TOKEN':
            return {
                ...state, token: action.token
            }
    }
}

export default reducer;