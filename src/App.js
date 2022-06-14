import React from 'react';
import { Component } from 'react';
import './App.css';
import Employee from './components/Employee';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import Attendance from './components/Attendance';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Not from './components/NotFound';

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
          <Redirect to='/NotFound'></Redirect>
        </Switch>
      </>
    );
  }
}
export default App;
