import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const App =() => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)