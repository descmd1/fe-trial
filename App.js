import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';
import Create from './pages/Create'



  function App (){

    return (
      <Router>
          <Switch>
             <Route Path = "/Create">
            <Create />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
