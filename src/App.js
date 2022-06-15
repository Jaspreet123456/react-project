import React from 'react';
import { Component } from 'react';
import Employee from './components/Employee';
import { Switch, Route, Redirect } from 'react-router-dom';
import Attendance from './components/Attendance';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Not from './components/NotFound';
import Login from './components/Login';
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render(){
    return (
      <> 
        <Switch>
         <Route exact path='/'  component = {NavBar} />
          <Route exact path='/Employee'  component = {Employee} />
          <Route exact path='/Contact'  component = {Contact} />
          <Route exact path='/About'  component = {About} />
          <Route path='/Attendance' component = {Attendance} />
          <Route path='/NotFound' component = {Not} />
          <Route path='/Login' component={Login} />
          <Redirect to='/NotFound'></Redirect>
        </Switch>
      </>
    );
  }
}
export default App;
