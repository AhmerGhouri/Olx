


const INITIAL_STATE = {

    users: [],
    current_user: [],
    Post_Ad: {


        username : "Ahmer",
        email : "ahmerghouri6@gmail.com"
}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload
            })

        case "ADPOST":
            return ({
                ...state,
                Post_Ad: action.payload
            })

    }
    return state;

}