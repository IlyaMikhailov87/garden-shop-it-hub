import { BASE_URL } from "..";
import { getAllCategoriesAction } from "../store/categoriesReducer"

export function fetchCategoriesList(callback){
  return function(dispatch) {
    fetch(BASE_URL + '/categories/all')
      .then(res => res.json())
      .then(data => dispatch(getAllCategoriesAction(data)))
      .finally(callback);
  }
}