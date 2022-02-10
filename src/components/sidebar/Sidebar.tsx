import { useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState("/");

  return (
    <aside className="sidebar">
      <SidebarItem
        title="All Protiens"
        link="/"
        route={activeRoute}
        clickHandler={setActiveRoute}
      />
      <SidebarItem
        title="Profile"
        link="/profile"
        route={activeRoute}
        clickHandler={setActiveRoute}
      />
    </aside>
  );
};

interface ISidebarItemProps {
  title: string;
  link: string;
  route: string;
  clickHandler: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  title,
  link,
  route,
  clickHandler,
}) => {
  return (
    <Link to={link}>
      <div
        className={`sidebar__item ${
          route === link ? "sidebar__itemSelected" : null
        }`}
        onClick={() => clickHandler(link)}
      >
        <h4>{title}</h4>
      </div>
    </Link>
  );
};
