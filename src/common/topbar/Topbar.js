import React from 'react';
import '../topbar/Topbar.scss';

//==Import Icons==//
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PublicIcon from '@material-ui/icons/Public';

//==import images for topbar==//
import Search from '../../assets/img/dashboard/search.svg';
import Admin from '../../assets/img/dashboard/admin.jpg';
import Envelop from '../../assets/img/dashboard/envelop.svg';
import Notification from '../../assets/img/dashboard/notification.svg';

const Topbar = () =>{
    return(
        <div className="main">
   <div className="topBar">
      <img src={Search} className="search"/>
      <input type="text" placeholder="Find Something . . ."/>
   </div>
   <div className="right_Side">
      <div className="name_Pash">
         <p className="naMe">
            Abdul Munim
            <KeyboardArrowDownIcon className="chevron_bottom"/>
         </p>
         <p className="pash">
            Admin
         </p>
      </div>
      <div className="user_img">
         <img src={Admin}/>
      </div>
      <div className="notifications">
         
         <div className="envelop">
            <img src={Envelop}/>
            <span >8</span>
         </div>
         
         <div className="bell">
            <img src={Notification} />
            <span >8</span>
         </div>
      
      </div>
            
    <div className="languages">
            <PublicIcon className="icn"/>
            <span>EN</span>
            <KeyboardArrowDownIcon className="chevron_bottom"/>
    </div>

   </div>
</div>
    )
}

export default Topbar;