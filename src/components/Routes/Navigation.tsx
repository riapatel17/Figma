import React, { FC } from "react";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Menu } from "../../pages/Menu";
import { Reward } from "../../pages/Rewards";
import { Deal } from "../../pages/Deals";
import { Brands } from "../../pages/Brands";

interface IRoutes {
  path: string;
  element: string;
}

const Navigation: FC<IRoutes> = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/menu", element: <Menu /> },
    { path: "/rewards", element: <Reward /> },
    { path: "/deals", element: <Deal /> },
    { path: "/brands", element: <Brands /> },
  ];
  return (
    <div>
      {routes.map((r) => (
        <div>
          {r.path} {r.element}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
