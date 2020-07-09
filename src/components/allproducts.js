import React from "react";
import products from "../products";

function AllProducts() {
  return (
    <div className="row row-cols-3 text-center">
      {products.map((product) => (
        <div className="col">
          <img
            className="img-thumbnail"
            style={{ height: 150, width: 150 }}
            src={product.image}
            alt=""
          ></img>
          <p className="font-weight-bolder mb-0">{product.name}</p>
          <p className="font-weight-bolder">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
