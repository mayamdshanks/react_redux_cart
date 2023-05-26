import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/actions/productActions";
import { ActionTypes } from "../redux/constants/action-types";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)

      .catch((error) => {
        console.log("Error:", error);
      });
      dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
      console.log({ ...response.data, productId }); 
  };
  useEffect(()=>{
    if(productId&&productId!=="")fetchProductDetail()
  },[productId])

  return <div>hello</div>;
};

export default ProductDetail;
