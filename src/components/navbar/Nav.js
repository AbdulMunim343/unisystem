import React from "react";
import '../navbar/Nav.scss';
import { NavLink } from "react-router-dom";


const Under = {
  textDecoration:'none',
}



const Nav = () =>{
    return(
<>
    <nav>
        <div className="logo">
            <img src="/assets/img/navigation/logo.png"/>
            <img src="/assets/img/navigation/square.svg" className="ham"/>
        </div>

        <ul>
            <NavLink exact activeClassName="nav_active" to='/' style={Under}>
                <li>
                <img src="/assets/img/navigation/dashboard.svg" className="imgSize"/>
                  <span>Dashboard</span>
                </li>
            </NavLink>
            
          <NavLink activeClassName="nav_active" to="/students" style={Under}>
                <li>
                <img src="/assets/img/navigation/students.svg" className="imgSize"/>
                  <span>Students</span>
                </li>
          </NavLink>
          
          <NavLink activeClassName="nav_active" to="/teachers" style={Under}>
          <li>
            <img src="/assets/img/navigation/teachers.svg" className="imgSize"/>
              <span>Teachers</span>
          </li>
          </NavLink>
            
          <NavLink activeClassName="nav_active" to="/classes" style={Under}>  
            <li>
            <img src="/assets/img/navigation/classes.svg" className="imgSize"/>
              <span>Classes</span>
            </li>
          </NavLink>

          <NavLink activeClassName="nav_active" to="/semester">
            <li>
            <img src="/assets/img/navigation/samester.svg" className="imgSize"/>
              <span>Samester</span>
            </li>
          </NavLink>
            
          <NavLink activeClassName="nav_active" to="/account_setting" style={Under}>
            <li>
            <img src="/assets/img/navigation/account.svg" className="imgSize"/>
              <span>Account Settings</span>
            </li>
          </NavLink>
            <li>
            <img src="/assets/img/navigation/logout.svg" className="imgSize"/>
              <span>Log Out</span>
            </li>
        
        </ul>
    </nav>

</>);

}



export default Nav;

