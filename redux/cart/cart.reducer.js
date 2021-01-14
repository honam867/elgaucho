const { CartActionsType } = require("./cart.types");

const INITIAL_STATE = {
  products: [],
  Carts: [],
  numberCart: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsType.GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    case CartActionsType.GET_NUMBER_CART:
      return {
        ...state
      };
    case CartActionsType.ADD_CART:

      let check = false;
      state.Carts.map((item, key) => {
        if (item.menusId === action.payload.menusId) {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++
            state.Carts[key].totalPriceOfProduct = state.Carts[key].quantity * Number(action.payload.prices.replace(/[^0-9]/g, ""))
            if (item.categoryId === action.payload.categoryId) {
              check = true;
            }
          }
        }
      });
      if (!check) {
        let _Cart = {
          id: action.payload.id,
          name: action.payload.name,
          prices: action.payload.prices,
          description: action.payload.description,
          urlImage: action.payload.urlImage,
          categoryId: action.payload.categoryId,
          menusId: action.payload.menusId,
          quantity: 1,
          totalPriceOfProduct: action.payload.quantity === 0 ? Number(action.payload.prices.replace(/[^0-9]/g, "")) : 0

        }
        state.Carts.push(_Cart);
      }
      return {
        ...state,
        numberCart: state.numberCart + 1
      };
    case CartActionsType.INCREASE_QUANTITY:
      state.numberCart++
      state.Carts[action.payload].quantity++;
      state.Carts[action.payload].totalPriceOfProduct = state.Carts[action.payload].quantity * Number(state.Carts[action.payload].prices.replace(/[^0-9]/g, ""))
      return {
        ...state
      }
    case CartActionsType.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
        state.Carts[action.payload].totalPriceOfProduct = state.Carts[action.payload].quantity * Number(state.Carts[action.payload].prices.replace(/[^0-9]/g, ""))
      }

      return {
        ...state
      }

    case CartActionsType.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
          return item.id != state.Carts[action.payload].id
        })

      }
    default:
      return state;
  }
};
export default cartReducer;
