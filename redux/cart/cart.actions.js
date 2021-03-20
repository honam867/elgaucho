const { CartActionsType } = require("./cart.types");

export const GetNumberCart = () => (dispatch) => {
    return dispatch({
        type: CartActionsType.GET_NUMBER_CART,
    })

};
export const AddCart = (payload) => {
    return {
        type: CartActionsType.ADD_CART,
        payload
    }
}
export const UpdateCart = (payload) => {
    return dispatch({
        type: CartActionsType.UPDATE_CART,
        payload
    })

};
export const DeleteCart = (payload) => (dispatch) => {
    return dispatch({
        type: CartActionsType.DELETE_CART,
        payload
    })

};
export const IncreaseQuantity = (payload) => (dispatch) => {
    return dispatch({
        type: CartActionsType.INCREASE_QUANTITY,
        payload
    })
}
export const DecreaseQuantity = (payload) => (dispatch) => {
    return dispatch({
        type: CartActionsType.DECREASE_QUANTITY,
        payload
    })
}