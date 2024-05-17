import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUS from "./components/aboutUs";
import Error from "./components/error";
import ContactUs from "./components/contactUs";

const App =() => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<App />,
        errorElement: <Error />
    },
    {
        path: "/aboutus",
        element: < AboutUS/>
    },
    {
        path: "/contactus",
        element: <ContactUs />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)