const defaultState = {
    users : [],
    newUser: {
        fname: '',
        lname:'',
        email:''
    },
    selected: {
        fname:'',
        lname:'',
        email:''
    }
}
const userReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {

        default: return state;
    }
}

export userReducer;