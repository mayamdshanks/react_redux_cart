import {ActionTypes} from "../constants/action-types"
export const setProducts=(products)=>{ 
  // setproducts and selectedproducts are action creators
  return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
  };
  
};
export const selectedProducts=(product)=>{ // 
  return {
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product,
  };
};
