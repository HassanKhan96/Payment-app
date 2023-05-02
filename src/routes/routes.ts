import Login from '../screens/auth/login/Login';
import Register from '../screens/auth/register/Register';
import AddPayment from '../screens/payment/add/AddPayment';
import Payment from '../screens/payment/home/Payment';
import routeNames from './routes.name';

const ROUTES = {
  AUTH: [
    {name: routeNames.AUTH.LOGIN, component: Login},
    {name: routeNames.AUTH.REGISTER, component: Register},
  ],
  PAYMENT: [
    {name: routeNames.PAYMENT.HOME, component: Payment},
    {name: routeNames.PAYMENT.ADD, component: AddPayment},
  ],
};

export default ROUTES;
