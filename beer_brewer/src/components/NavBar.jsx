import React from "react";
// import { useImperativeHandle } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Browse Beers
        </Link>
        <ul>
          <NavBarLink to="/Favorites">Favorite Beers</NavBarLink>
        </ul>
      </nav>
    </>
  );
}

function NavBarLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}

export default NavBar;
