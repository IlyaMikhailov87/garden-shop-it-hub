const defaultState = {
  cart: [],
  totalCount: 0,
  totalAmount: 0,
};

const storedCart = localStorage.getItem('cartStore');
const saveCartInStore = (newState) => localStorage.setItem('cartStore', JSON.stringify(newState));
const initialState = storedCart ? JSON.parse(storedCart) : defaultState;
let newState;

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.cart.find(
        (elem) => elem.id === action.payload.id,
      );

      if (existingItem) {
        console.log('Item exists in cart');
        const updatedCart = state.cart.map((elem) =>
          elem.id === action.payload.id
            ? { ...elem, count: elem.count + action.payload.count }
            : elem,
        );
        const updatedTotalCount = state.totalCount + action.payload.count;
        const filteredCart = updatedCart.filter((elem) => elem.count !== 0);

        newState = {
          cart: filteredCart,
          totalCount: updatedTotalCount,
          totalAmount:
            state.totalAmount +
            action.payload.count *
              (action.payload.discont_price
                ? action.payload.discont_price.toFixed(2)
                : action.payload.price.toFixed(2)),
        };
        saveCartInStore(newState);
        return newState;
      } else {
        console.log("Item doesn't exist in cart");
        newState = {
          cart: [...state.cart, action.payload],
          totalCount: state.totalCount + action.payload.count,
          totalAmount:
            state.totalAmount +
            action.payload.count *
              (action.payload.discont_price
                ? action.payload.discont_price.toFixed(2)
                : action.payload.price.toFixed(2)),
        };

        saveCartInStore(newState);
        return newState;
      }
    case DELETE_ITEM:
      const deletedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      const deletedItemPrice =
        deletedItem &&
        (deletedItem.discont_price
          ? deletedItem.discont_price
          : deletedItem.price);

      newState = {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalCount: state.totalCount - action.payload.count,
        totalAmount:
          state.totalAmount - action.payload.count * deletedItemPrice,
      };

      saveCartInStore(newState);
      return newState;
    default:
      return state;
  }
};

export const addItemAction = (payload) => ({
  type: ADD_ITEM,
  payload,
});
export const deleteItemAction = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
