const defaultState = {
  categories_name: null,
  products: [],
};

const ALL_PRODUCTS = 'ALL_PRODUCTS';
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE';
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY';
const PRODUCT_BY_ID = 'PRODUCT_BY_ID';
const FILTER = 'FILTER';

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        categories_name: 'All products',
        products: addPropertys(action.payload),
      };

    case ALL_PRODUCTS_SALE:
      return {
        categories_name: 'Discounted items',
        products: addPropertys(action.payload),
      };

    case PRODUCTS_BY_CATEGORY:
      return {
        categories_name: action.payload.category.title,
        products: addPropertys(action.payload.data),
      };

    case PRODUCT_BY_ID:
      return { ...state, products: addPropertys(action.payload) };

    case FILTER:
      let changed_products = state.products.map((elem) => {
        const isPriceInRange =
          action.payload.min <= (elem.discont_price ? elem.discont_price : elem.price) &&
          action.payload.max >= (elem.discont_price ? elem.discont_price : elem.price);
        const hasDiscount = action.payload.checkbox ? Boolean(elem.discont_price) : true;
      
        const sortValue = action.payload.select;
        let sortScore;
        if (sortValue === "by default") {
          sortScore = elem.id;
        } else if (sortValue === "newest") {
          sortScore = elem.createdAt;
        } else if (sortValue === "price: high-low") {
          sortScore = -(elem.discont_price ? elem.discont_price : elem.price);
        } else if (sortValue === "price: low-high") {
          sortScore = elem.discont_price ? elem.discont_price : elem.price;
        }
      
        return {
          ...elem,
          isShow: isPriceInRange && hasDiscount,
          sortScore,
        };
      });
      
      changed_products.sort((a, b) => a.sortScore - b.sortScore);
      
      return { ...state, products: changed_products };
    default:
      return state;
  }
};

const addPropertys = (payload) => {
  return payload.map((elem) => ({ ...elem, isShow: true, count: 1 }));
};

export const allProductsAction = (payload) => ({
  type: ALL_PRODUCTS,
  payload,
});
export const allProductsSaleAction = (payload) => ({
  type: ALL_PRODUCTS_SALE,
  payload,
});
export const productsByCategoryAction = (payload) => ({
  type: PRODUCTS_BY_CATEGORY,
  payload,
});
export const productByIdAction = (payload) => ({
  type: PRODUCT_BY_ID,
  payload,
});
export const filterAction = (payload) => ({
  type: FILTER,
  payload,
});