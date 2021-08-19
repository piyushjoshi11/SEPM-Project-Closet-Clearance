import React from "react";
import SigninScreen from "./screens/SigninScreen";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import ProductScreen from "./screens/ProductScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import AdminRoute from "./components/AdminRoute";
import ProfileScreen from "./screens/ProfileScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import OrderScreen from "./screens/OrderScreen";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import CartScreen from "./screens/CartScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <h1>CLOSET CLEARANCE</h1>
              </Link>
            </div>
            <nav>
              <ul id="menu_items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Women</Link>
                </li>
                <li>
                  <Link to="#">Kids</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  {userInfo ? (
                    <div className="dropdown">
                      <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                          <Link to="/orderhistory">Order History</Link>
                        </li>
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>
                            Sign Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <Link to="#admin">
                        Admin <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/productlist">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist">Orders</Link>
                        </li>
                        <li>
                          <Link to="/userlist">Users</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
            <Link to="/cart">
              <img
                src="/images/cart.png"
                alt="cart_image"
                width="30px"
                height="30px"
              />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <img
              src="/iamges/menu.png"
              className="menu_icon"
              onclick="menutoggle()"
              alt=""
            />
          </div>
        </div>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route
          path="/product/:id/edit"
          component={ProductEditScreen}
          exact
        ></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <AdminRoute
          path="/productlist"
          component={ProductListScreen}
        ></AdminRoute>
        <AdminRoute path="/orderlist" component={OrderListScreen}></AdminRoute>
        <Route path="/" component={HomeScreen} exact></Route>

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer_col1">
                <h3>Download App</h3>
                <p>Experience app on mobile</p>
                <div className="app_logo">
                  <img src="/images/logo1.png" alt="app_image" />
                  <img src="/images/logo2.png" alt="app_image" />
                </div>
              </div>
              <div className="footer_col2">
                <h2>CLOSET CLEARANCE</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing Quibusdam
                  sit dignissimos facilis, modi voluptatem
                </p>
              </div>
              <div className="footer_col3">
                <h3>Useful Links</h3>
                <ul>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>T&C</li>
                  <li>Terms Of Use</li>
                </ul>
              </div>
              <div className="footer_col4">
                <h3>Social</h3>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
            <hr />
            <p className="copyright">&#169; Copyright 2021 Closet Clearance</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
