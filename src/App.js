import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';

// components//
import Nav from './components/navbar/Nav.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Students from './components/students/Students.jsx';
import Teachers from './components/teachers/Teachers.jsx'
import  Classes from './components/classes/Classes.jsx';
import Semester from './components/semester/Semester.jsx';
import Account from './components/account/Account.jsx' 



class App extends Component {
  
  render(){
  
  return (
    <>

<div className="Felx">
  <div className="navBar">

      <Nav/>    

  </div>
  
  <div className="Compo">

  <Switch>

  <Route exact path='/' component={Dashboard}/>
  <Route path='/students' component={Students}/>
  <Route path='/teachers' component={Teachers}/>
  <Route path='/classes' component={Classes}/>
  <Route path='/semester' component={Semester}/>
  <Route path='/account_setting' component={Account}/>


</Switch>

  </div>

  

</div>
    </>
  )
  }
}

export default App;