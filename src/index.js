import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./page/Home"
import "./style.scss"
import { UserProvider } from "./utils/context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <UserProvider>
      <Home />
    </UserProvider>
  </React.StrictMode>
)
