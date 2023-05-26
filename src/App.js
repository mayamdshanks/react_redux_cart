import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/productdetail" exact Component={ProductDetail} />
          <Route path="/productlist" exact Component={ProductListing} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
