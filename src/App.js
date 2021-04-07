import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Resturantpage from './pages/resturant/resturant.component';
import Winepage from './pages/wine/wine.component';
import Foodpage from './pages/food/food.component';
import Supermarketspage from './pages/supermarkets/supermarkets.component';
import Pharmacypage from './pages/pharmacy/pharmacy.component';
import Checkoutpage from './pages/checkout/checkout.component';
import { Route, Switch} from "react-router-dom";
import {GlobalContainer} from './global.styles';
import './App.css';

function App() {
  return (
    <div>
      <GlobalContainer />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/resturant" component= {Resturantpage} />
      <Route path="/wine" component= {Winepage} />
      <Route path="/food" component= {Foodpage} />
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
