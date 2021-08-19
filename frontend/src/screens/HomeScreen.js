import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="small_container">
        <div className="row row2">
          <h2>All Products</h2>
          <select name="" id="">
            <option value="">Sort by: relevance</option>
            <option value="">Sort by: price: Low To High</option>
            <option value="">Sort by: price: High To Low</option>
            <option value="">Sort by: new arrival</option>
            <option value="">Sort by: popular</option>
          </select>
        </div>
        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          )}
        </div>
        <div className="page_btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
    </div>
  );
}
