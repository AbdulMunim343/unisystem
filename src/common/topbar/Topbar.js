import React from 'react';
import '../topbar/Topbar.scss';

//==Import Icons==//
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PublicIcon from '@material-ui/icons/Public';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

//==import images for topbar==//
import Search from '../../assets/img/dashboard/search.svg';
import Admin from '../../assets/img/dashboard/admin.jpg';
import Envelop from '../../assets/img/dashboard/envelop.svg';
import Notification from '../../assets/img/dashboard/notification.svg';



const Wrapper = () =>{
   return(
      <div className="contant_area">
      <div className="messege_wrapper">
         
         <div className="user_img">
            <img src={Admin}/>
         </div>

         <div class="text_wrapper">
               <div className="nt_container">
                  <span className="item_name">Maria Zaman</span>
                  <span className="item_time">18:30</span>
               </div>
         <p>
            What is the reason of buy this item. Is it usefull for me.....
         </p>
         
         </div>
         
      </div>
      
      </div>
   )
}



const Noti_wrapper = () =>{
   return(
      <div className="media_noti">
      <div className="item_noti">
        <CheckOutlinedIcon/>
      </div> 

      <div className="noti_text">
         <div className="post_title">Complete Today Task</div>
         <span>1 Mins ago</span>
      </div>   
 </div>
   )
}






const Topbar = () =>{
    return(
      <div className="main">
      <div className="topBar">
          <img src={Search} className="search" />
          <input type="text" placeholder="Find Something . . ." />
      </div>
      <div className="right_Side">
          <div className="name_Pash">
              <p className="naMe">
                  Abdul Munim
                  <KeyboardArrowDownIcon className="chevron_bottom" />
              </p>
              <p className="pash">
                  Admin
              </p>
  
              {/* Admin Drop Down start*/}
  
              <div className="admin_drop_down">
                  <div className="admin_name">
                      Abdul Munim
                  </div>
  
                  <ul className="list">
                      <li>
                          <PersonOutlineOutlinedIcon className="list_icn" />
                          My Profile
                      </li>
  
                      <li>
                          <ListAltOutlinedIcon className="list_icn" />
                          Task
                      </li>
  
                      <li>
                          <MessageOutlinedIcon className="list_icn" />
                          Messege
                      </li>
  
                      <li>
                          <SettingsOutlinedIcon className="list_icn" />
                          Account Setting
                      </li>
  
                      <li>
                          <ExitToAppOutlinedIcon className="list_icn" />
                          Log Out
                      </li>
                  </ul>
              </div>
  
              {/* Admin Drop Down End */}
          </div>
          <div className="user_img">
              <img src={Admin} />
          </div>
          <div className="notifications">
              <div className="envelop">
                  <img src={Envelop} className="enve" />
                  <span className="Number_genrater">8</span>
  
                  {/* Messege drop Down Start */}
  
                  <div className="messege_drop_down">
                      <div className="messege_status">
                          05 Messege
                      </div>
  
                      <Wrapper />
                      <Wrapper />
                      <Wrapper />
                      <Wrapper />
                  </div>
                  {/* Messege drop Down end */}
              </div>
  
              <div className="bell">
                  <img src={Notification} className="bell_noti" />
                  <span className="Number_genrater">8</span>
  
                  {/* Messege drop Down Start */}
  
                  <div className="notification_drop_down ">
                      <div className="messege_status">
                          03 Notification
                      </div>
  
                      <div class="noti_wrapper">
                          <Noti_wrapper />
                          <Noti_wrapper />
                          <Noti_wrapper />
                      </div>
                  </div>
                  {/* Messege drop Down end */}
              </div>
          </div>
  
          <div className="languages">
              <PublicIcon className="icn" />
              <span>EN</span>
              <KeyboardArrowDownIcon className="chevron_bottom"/>
          
            <ul className="language_drop">
               <li>English</li>
               <li>Spanish</li>
               <li>Frenchise</li>
               <li>Chiness</li>
            </ul>
          
          </div>
      </div>
  </div>
  
    )
}

export default Topbar;