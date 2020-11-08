import React from 'react';
import '../topbar/Topbar.scss';

//==Import Icons==//
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PublicIcon from '@material-ui/icons/Public';




const Topbar = () =>{
    return(
        <div className="main">
   <div className="topBar">
      <img src="/assets/img/dashboard/search.svg" className="search"/>
      <input type="text" placeholder="Find Something . . ."/>
   </div>
   <div className="right_Side">
      <div className="name_Pash">
         <p className="naMe">
            Abdul Munim
            <KeyboardArrowDownIcon/>
         </p>
         <p className="pash">
            Admin
         </p>
      </div>
      <div className="user_img">
         <img src="/assets/img/dashboard/admin.jpg"/>
      </div>
      <div className="notifications">
         
         <div className="envelop">
            <img src="/assets/img/dashboard/envelop.svg"/>
            <span >8</span>
         </div>
         
         <div className="bell">
            <img src="/assets/img/dashboard/notification.svg" />
            <span >8</span>
         </div>
      
      </div>
            
    <div className="languages">
            <PublicIcon className="icn"/>
            <span>EN</span>
            <KeyboardArrowDownIcon/>
    </div>

   </div>
</div>
    )
}

export default Topbar;