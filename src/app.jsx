import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";

const App =() => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)