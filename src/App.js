import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";

import "./index.css";
import Home from "./page/Home";
import Products from "./page/Products";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
