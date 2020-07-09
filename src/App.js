import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./components/allproducts";
import ShowCategoryFilters from "./components/showCategoryFilters";
import ShowColorFilters from "./components/showColorFilters";
import ShowRatingFilters from "./components/showRatingFilters";
import products from "./products";
function App() {
  let [category, setCategory] = useState("");
  let [color, setColor] = useState("");
  let [rating, setRating] = useState("");

  function showbyCategory(data) {
    if (data === "All") {
      setCategory((category = ""));
    } else {
      setCategory((category = data));
    }
  }

  function showbyColor(data) {
    if (data === "All") {
      setColor((color = ""));
    } else {
      setColor((color = data));
    }
  }

  function showbyRating(data) {
    if (data === "All") {
      setRating((rating = ""));
    } else {
      setRating((rating = data));
    }
  }

  function renderProduct() {
    if (color === "" && category !== "" && rating !== "") {
      return (
        <div className="row row-cols-3 text-center">
          {products
            .filter(
              (product) =>
                product.category === category && product.rating >= rating
            )
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (category === "" && color !== "" && rating !== "") {
      return (
        <div className="row row-cols-3  text-center">
          {products
            .filter(
              (product) => product.color === color && product.rating >= rating
            )
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (rating === "" && color !== "" && category !== "") {
      return (
        <div className="row row-cols-3 text-center">
          {products
            .filter(
              (product) =>
                product.color === color && product.category === category
            )
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (category === "" && color === "" && rating !== "") {
      return (
        <div className="row row-cols-3 text-center">
          {products
            .filter((product) => product.rating >= rating)
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (category === "" && color !== "" && rating === "") {
      return (
        <div className="row row-cols-3 text-center">
          {products
            .filter((product) => product.color === color)
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (category !== "" && color === "" && rating === "") {
      return (
        <div className="row row-cols-3 text-center">
          {products
            .filter((product) => product.category === category)
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else if (category !== "" && color !== "" && rating !== "") {
      return (
        <div className="row row-cols-3  text-center">
          {products
            .filter(
              (product) =>
                product.color === color &&
                product.category === category &&
                product.rating >= rating
            )
            .map((filteredProduct) => (
              <div className="col">
                <img
                  className="img-thumbnail"
                  style={{ height: 150, width: 150 }}
                  src={filteredProduct.image}
                  alt=""
                ></img>
                <p className="font-weight-bolder mb-0">
                  {filteredProduct.name}
                </p>
                <p className="font-weight-bolder">${filteredProduct.price}</p>
              </div>
            ))}
        </div>
      );
    } else {
      return <AllProducts></AllProducts>;
    }
  }

  return (
    <div>
      <h1 className="text-center">Shop Now!</h1>
      <div className="row row-cols-3 m-5 p-2">
        <div className="col">
          <ShowCategoryFilters
            filterCategory={showbyCategory}
          ></ShowCategoryFilters>
        </div>
        <div className="col">
          <ShowColorFilters filterColor={showbyColor}></ShowColorFilters>
        </div>
        <div className="col">
          <ShowRatingFilters filterRating={showbyRating}></ShowRatingFilters>
        </div>
      </div>
      {renderProduct()}
    </div>
  );
}

export default App;
