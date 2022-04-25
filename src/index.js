import React from "react";
import ReactDOMclient from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css"

const root=ReactDOMclient.createRoot(document.getElementById("root"))
root.render(<BrowserRouter><App/></BrowserRouter>)