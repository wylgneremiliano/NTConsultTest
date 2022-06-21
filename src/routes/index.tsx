import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Switch>
  </BrowserRouter>
);
export { Routes };
