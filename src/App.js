import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Resturantpage from './pages/resturant/resturant.component';
import Winepage from './pages/wine/wine.component';
import Supermarketspage from './pages/supermarkets/supermarkets.component';
import Pharmacypage from './pages/pharmacy/pharmacy.component';
import Checkoutpage from './pages/checkout/checkout.component';
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/resturant" component= {Resturantpage} />
      <Route path="/wine" component= {Winepage} />
      <Route path="/supermarkets" component= {Supermarketspage} />
      <Route path="/pharmacy" component= {Pharmacypage} />
      <Route exact path="/checkout" component= {Checkoutpage} />
        <Resturantpage />
        <Winepage />
      </Switch>
    </div>
  );
}

export default App;
