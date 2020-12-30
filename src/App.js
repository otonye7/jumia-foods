import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Resturantpage from './pages/resturant/resturant.component';
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/resturant" component= {Resturantpage} />
        <Resturantpage />
      </Switch>
    </div>
  );
}

export default App;
