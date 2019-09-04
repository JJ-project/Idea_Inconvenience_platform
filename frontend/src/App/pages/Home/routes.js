import Main from "./pages/Main";
import SignIn from "./pages/SignIn"

const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: "/login",
    exact: true,
    component: SignIn
  }
];

export default routes;
