import { createBrowserRouter } from 'react-router-dom';
import CartMobile from '../components/cart/CartMobile';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <CartMobile />
            }
        ]
    }
]);