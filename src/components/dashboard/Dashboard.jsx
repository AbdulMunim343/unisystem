import React, {Component} from 'react';
import  '../dashboard/Dashboard.scss';
import Card_data from './Cadr_data';


//==import Componets==//
import Topbar from '../../common/topbar/Topbar.jsx';



const Card_top = (props) =>{
    return(
        <div className="top_card">
        <div className="icons_item">
            <img src={props.Cardimg}/>
        </div>
        <div className="text_holder">
            <div className="item_title">{props.Card_title}</div>
            <div className="item_number">{props.Card_number}</div>
        </div>
    </div>
    )
}



class Dashboard extends Component{
    
    render(){
    return(
        <>
            <Topbar/>

            <div className="main_Container">

                <div className="main_Heading">
                    <h3>Admin Dashboard</h3>
                </div>

                <div className="card_Holder">
                  
               {Card_data.map((Cardval)=>{
                 return(
                    <Card_top
                        Cardimg={Cardval.Cardimg}
                        Card_title = {Cardval.Card_title}
                        Card_number = {Cardval.Card_number}
                    />
                 )  
               })}

                </div>

                <div className="card_Holder">
                    <div className="dounut_date">

                   


                    </div>
                    <div className="dounut_date"></div>
                </div>
            
            
            
            
            
            </div>


           
        </>
    )
}
}

export default Dashboard;