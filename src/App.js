import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Resturantpage from './pages/resturant/resturant.component';
import Winepage from './pages/wine/wine.component';
import Supermarketspage from './pages/supermarkets/supermarkets.component';
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/resturant" component= {Resturantpage} />
      <Route path="/wine" component= {Winepage} />
      <Route path="/supermarkets" component= {Supermarketspage} />
        <Resturantpage />
        <Winepage />
      </Switch>
    </div>
  );
}

export default App;
