import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddPackages from "../../Pages/AddPackage/AddPackages";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import PackageDetails from "../../Pages/Home/PackageDetails/PackageDetails";
import Packages from "../../Pages/Home/Packages/Packages";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReview from "../../Pages/MyReviews/UpdateReview";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/packages',
                element: <Packages></Packages>
            },
            {
                path: '/packages/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/packages/${params.id}`)
            },
            {
                path: '/addpackages',
                element: <AddPackages></AddPackages>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/myreviews/updatereview/:id',
                element: <UpdateReview></UpdateReview>

            }

        ]
    }
])
export default router