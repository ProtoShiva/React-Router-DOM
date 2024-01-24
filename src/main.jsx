import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/*BrowserRouter is a react context. It will provide the info related to routing to all of the other components in our app. We have diff router:
HashRouter: 
HistoryRouter:
MemoryRouter: URL doesn't change when you got to diff routes
StaticRouter: <staticRouter location = '/'/> for server side routing when you are testing
NativeRouter:
*/
