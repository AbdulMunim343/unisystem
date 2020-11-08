import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import {Switch,Route} from 'react-router-dom';

// components//
import Nav from './components/navbar/Nav';
import Dashboard from './components/dashboard/Dashboard';
import Students from './components/students/Students';
import Teachers from './components/teachers/Teachers'
import  Classes from './components/classes/Classes';
import Semester from './components/semester/Semester';
import Account from './components/account/Account' 



const App = () => {
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
  );
}

export default App;