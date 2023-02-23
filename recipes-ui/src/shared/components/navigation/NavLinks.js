import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink to="/addrecipe">Add Recipes</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
