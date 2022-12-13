const initial_state = {
    data: []
}

export const datareducer = (state = initial_state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}