import MainLayout from "../layouts/MainLayout";
import Landing from "../views/Landing";
import Login from "../views/Login";
import Register from "../views/Register";
import Review from "../views/Review";

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { path: '/review/:shopId' , element: <Review/>},
            { path: '/login' , element: <Login/>},
            { path: '/register' , element: <Register/>},
            { path: '/' , element: <Landing/>}
        ]
    }
]

export default routes;
