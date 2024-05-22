import React, { Children } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider, Outlet, createRoutesFromChildren, Route } from "react-router-dom";
import About from "./components/about.jsx";
import Error from "./components/error";
import Contact from "./components/contact.jsx";
import RestaurantMenu from "./components/restaurantmenu.jsx";

const App =() => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter(
   createRoutesFromChildren(
    <Route path="/" element={<App/>} >
        <Route path="/" element={<Body/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
    </Route>
) 
//     [
//     {
//         path: "/",
//         element:<App />,
//         Children:[
//             {
//                 path: "/",
//                 element: <Body />
//             },
//             {
//                 path: "/aboutus",
//                 element: <About/>
//             },
//             {
//                 path: "/contactus",
//                 element: <Contact />
//             },
//         ],
//         errorElement: <Error />,
//     },
// ]

)

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)