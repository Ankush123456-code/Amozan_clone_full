import React from "react";
import "./Home.css";
import Product from "./Product"
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product/>
          {/* {product component} */}
        </div>
        <div className="home_row">
          {/* {product component} */}
          {/* {product component} */}
          {/* {product component} */}
        </div>
        <div className="home_row">
            {/* {product component} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
