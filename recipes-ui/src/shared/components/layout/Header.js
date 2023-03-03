import React from "react";

import "./Header.css";
import imgArgentina from "../../assets/argentina.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactRecipes</h1>
      </header>
      <div className="main-image">
        <img src={imgArgentina} alt="an image of the moment Argentina won the 2022 FIFA World Cup" />
      </div>
    </React.Fragment>
  );
};

export default Header;
