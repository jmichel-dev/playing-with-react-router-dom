import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./page/ProductDetail";

import "./index.css";
import Home from "./page/Home";
import Products from "./page/Products";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
