import React, {Component} from "react";
import '../navbar/Nav.scss';
import { NavLink } from "react-router-dom";


//==import images for navebar==// 
import Logo from '../../assets/img/navigation/logo.png';
import Hamburger from '../../assets/img/navigation/square.svg';
import Board from '../../assets/img/navigation/dashboard.svg';
import Student from '../../assets/img/navigation/students.svg';
import Teach from  '../../assets/img/navigation/teachers.svg';
import Group from '../../assets/img/navigation/classes.svg';
import Sem from '../../assets/img/navigation/samester.svg';
import Setting from '../../assets/img/navigation/account.svg'; 
import Out from '../../assets/img/navigation/logout.svg'



const Under = {
  textDecoration:'none',
}



class Nav extends Component{
    render(){
    
    return(
<>
    <nav>
        <div className="logo">
            <img src={Logo}/>
            <img src={Hamburger} className="ham"/>
        </div>

        <ul>
            <NavLink exact activeClassName="nav_active" to='/' style={Under}>
                <li>
                <img src={Board} className="imgSize"/>
                  <span>Dashboard</span>
                </li>
            </NavLink>
            
          <NavLink activeClassName="nav_active" to="/students" style={Under}>
                <li>
                <img src={Student} className="imgSize"/>
                  <span>Students</span>
                </li>
          </NavLink>
          
          <NavLink activeClassName="nav_active" to="/teachers" style={Under}>
          <li>
            <img src={Teach} className="imgSize"/>
              <span>Teachers</span>
          </li>
          </NavLink>
            
          <NavLink activeClassName="nav_active" to="/classes" style={Under}>  
            <li>
            <img src={Group} className="imgSize"/>
              <span>Classes</span>
            </li>
          </NavLink>

          <NavLink activeClassName="nav_active" to="/semester">
            <li>
            <img src={Sem} className="imgSize"/>
              <span>Samester</span>
            </li>
          </NavLink>
            
          <NavLink activeClassName="nav_active" to="/account_setting" style={Under}>
            <li>
            <img src={Setting} className="imgSize"/>
              <span>Account Settings</span>
            </li>
          </NavLink>
            <li>
            <img src={Out} className="imgSize"/>
              <span>Log Out</span>
            </li>
        
        </ul>
    </nav>

</>)


    }
}



export default Nav;

