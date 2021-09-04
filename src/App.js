import AllBarbers from './components/allBarbers/AllBarbers';
import ClientProfile from './components/ClientProfile/ClientProfile';
import Products from './components/Products';
import BarberProfile from './components/barber/BarberProfile';
import SignInUp from './components/SignInUp';
import Home from './components/home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/nav';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/barber-Profile/:id'>
            <BarberProfile />
          </Route>

          <Route exact path='/all-barbers'>
            <AllBarbers />
          </Route>
          <Route exact path='/my-profile/:id' component={ClientProfile} />
          <Route exact path='/products/:id' component={Products} />
          <Route exact path='/sign' component={SignInUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
