import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Components/Products";
import Users from "./Components/Users";
import NoPage from "./Components/NoPage";
import Friends from "./Components/Friends";
import Profile from "./Components/Profile";

export const UserContext = React.createContext(null);

const user = {
  email: "sam@sam.com",
  uid: 12,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContext.Provider value={user}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />}>
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </UserContext.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
