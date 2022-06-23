import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { Dashboard } from "@pages/Dashboard";
import { Login } from "@pages/Login";
import { PrivateRoute } from "./PrivateRoutes";
import { Details } from "@src/pages/DetailsDrag";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Details/:id" element={<Details />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Switch>
  </BrowserRouter>
);
export { Routes };
