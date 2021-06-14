import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header_serach">
        <input className="search_input" type="text" />
        <SearchIcon className="header_serachIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineon">Hello Guest</span>
          <span className="header_optionLinetw">sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineon">Return</span>
          <span className="header_optionLinetw">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineon">Your</span>
          <span className="header_optionLinetw">prime</span>
        </div>
        <div className="header_basket_icon">
          <ShoppingBasketIcon />
          <span className="header_optionLinetw headerbasketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
