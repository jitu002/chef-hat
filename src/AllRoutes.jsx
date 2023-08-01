import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Homepage } from "./Pages/Homepage";
import { FoodMenu } from "./Pages/FoodMenu";
import { Checkout } from "./Pages/Checkout";
import { Plans } from "./Pages/Plans";
import { Wine } from "./Pages/Wine";
import { WineMenu } from "./Pages/WineMenu";
import { Gifts } from "./Pages/Gifts";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/FoodMenu"
        element={
            <FoodMenu />
          
        }
      ></Route>
      <Route
        path="/cart"
        element={
            <Cart />

        }
      ></Route>
      <Route
        path="/Checkout"
        element={
            <Checkout />

        }
      ></Route>
      <Route
        path="/Plans"
        element={
            <Plans />

        }
      ></Route>
      <Route
        path="/Wine"
        element={
            <Wine />

        }
      ></Route>
      <Route
        path="/WineMenu"
        element={
            <WineMenu />

        }
      ></Route>
      <Route
        path="/Gifts"
        element={
            <Gifts />

        }
      ></Route>
    </Routes>
  );
};
