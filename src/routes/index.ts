

import Settings from "../pages/Settings";
import Accounts from "../pages/Accounts";

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
  },
  {
    path: "/settings",
    name: "Settings",
    element: Settings
  },
  {
    path: "/accounts",
    name: "Accounts",
    element: Accounts
  }
];

export default routes;
