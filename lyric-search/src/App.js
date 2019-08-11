import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Navbar from './Components/layout/Navbar';
import Index from './Components/layout/Index'


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
