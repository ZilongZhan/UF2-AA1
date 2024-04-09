import { ServersList } from "./ServersList";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="header-top__nav">
      <ServersList />
    </nav>
  );
};
