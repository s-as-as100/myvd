 import React, { Component } from 'react';
 import {Route, Redirect, Switch} from 'react-router-dom';
 import Movies from './components/movies';
import './App.css';
 
import NotFound from './components/common/not-found';
import Rental from './components/common/rental';
import Customers from './components/common/customers';
import NavBar from './components/navBar';
 
class App extends Component {
  render() {
    return (
      <React.Fragment>
       <NavBar />
      <main className='container'>
         <Switch>
       <Route path="/movies" component={Movies}></Route>
       <Route path="/customers" component={Customers}></Route>
       <Route path="/rental" component={Rental}></Route>
       <Route path="not-found" component={NotFound}></Route>
       <Redirect from="/" exact to= "/movies"/>
       <Redirect to="/not-found"/>
       </Switch>
      </main>
      </React.Fragment>
    )
  }
}
 
export default App;

 