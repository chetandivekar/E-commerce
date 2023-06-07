import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </div>

      <div className="search">
        <input className="input" type="text" />
        <div className="search_back">
          <SearchOutlinedIcon className="navbar_searchIcon" />
        </div>
      </div>
      <div className="account_info">
        <div className="info">
          <div className="upper">Hello, sign in</div>
          <div className="lower">Account & List</div>
        </div>
        <div className="info">
          <div className="upper">Returns</div>
          <div className="lower">& Orders</div>
        </div>
        <div className="info">
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
