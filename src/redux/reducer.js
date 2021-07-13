const initialState = {
    currentTip: "",
    currentBill: "",
    currentNumberOfPeople: "",
}


const SET_CURRENT_NUMBER = "SET_CURRENT_NUMBER";
const RESET_CURRENT_VALUES = "RESET_CURRENT_VALUES";


function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_CURRENT_NUMBER:
            return {
                ...state,
                [action.variable]: action.number,
            }

        case RESET_CURRENT_VALUES:
            return {
                ...state,
                currentTip: "",
                currentBill: "",
                currentNumberOfPeople: "",
            }

        default:
            return {
                ...state
            }
    }
}

export const setCurrentNumber = (number, variable) => {
    return { type: SET_CURRENT_NUMBER, number, variable }
}

export const resetCurrentValues = () => {
    return { type: RESET_CURRENT_VALUES }
}


export default reducer;