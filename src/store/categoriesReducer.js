const defaultState = [];

const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
}

export const getAllCategoriesAction = (payload) => ({ type: GET_ALL_CATEGORIES, payload });