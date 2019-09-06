import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/sign-in',
    exact: true,
    component: SignIn
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp
  }
];

export default routes;
