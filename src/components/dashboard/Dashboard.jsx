import React, { Component } from 'react';
import '../dashboard/Dashboard.scss';
import Card_data from './Cadr_data';
import { PieChart } from 'react-minimal-pie-chart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';








//==import Componets==//
import Topbar from '../../common/topbar/Topbar.jsx';
//==import iconss==//
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Card_top = (props) => {
    return (
        <div className="top_card">
            <div className="icons_item">
                <img src={props.Cardimg} />
            </div>
            <div className="text_holder">
                <div className="item_title">{props.Card_title}</div>
                <div className="item_number">{props.Card_number}</div>
            </div>
        </div>
    )
}

const Card_bottom = (props) => {
    return (
        <div className="top_card">
            <div className="icons_item">
                <img src={props.Icon} />
            </div>
            <div className="text_holder">
                <div className="item_title">{props.Icon_title}</div>
                <div className="item_number">{props.Member}</div>
            </div>
        </div>
    )
}



class Dashboard extends React.Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.state({ date })

    render() {

        return (
            <>
                <Topbar />
                <div className="main_Container">
                    <div className="main_Heading">
                        <h3>Admin Dashboard</h3>
                    </div>
                    <div className="card_Holder">
                        {Card_data.map((Cardval) => {
                            return (
                                <Card_top
                                    Cardimg={Cardval.Cardimg}
                                    Card_title={Cardval.Card_title}
                                    Card_number={Cardval.Card_number}
                                />
                            )
                        })}
                    </div>
                    <div className="card_Holder">
                        {/* dounur chart start*/}
                        <div className="dounut_date">
                            <div className="card_holder_heading">
                                <h3>Students</h3>
                                <MoreVertIcon />
                            </div>
                            <div className="dounut">
                                <PieChart className="chart"
                                    data={[
                                        { title: 'One', value: 70, color: '#042954' },
                                        { title: 'Three', value: 30, color: '#ffa001' },
                                    ]}
                                />
                            </div>
                            <div className="bar_Aria">
                                <div class="student_count">
                                    <div className="color_gardians left_color"></div>
                                    <h4>Female Students</h4>
                                    <span>45,000</span>
                                </div>
                                <div class="student_count">
                                    <div className="color_gardians right_color"></div>
                                    <h4>Male Students</h4>
                                    <span>1,05,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Caledar start*/}
                        <div className="dounut_date">
                            <div className="card_holder_heading">
                                <h3>Event Calender</h3>
                                <MoreVertIcon />
                            </div>
                            <Calendar onChange={this.state.onChange} value={this.state.date} />

                        </div>
                    </div>

                    <div className="card_Holder">
                        {/* Treffics start*/}
                        <div className="dounut_date">
                            <div className="card_holder_heading">
                                <h3>Website Traffic</h3>
                                <MoreVertIcon />
                            </div>
                            <div className="treffic_container">
                                <span>Unique Treffic</span>
                                <h1>2,510</h1>
                                <div className="progress_bar">
                                    <div className="dir"></div>
                                    <div className="srch"></div>
                                    <div className="ref"></div>
                                    <div className="soc"></div>
                                </div>

                                {/* color anticater start */}
                                <div className="color_mach">
                                    <span>
                                        <div className="color_circul"></div>
                                        Direct
                                    </span>
                                    <span>12,890</span>
                                    <span>50%</span>
                                </div>

                                {/* color anticater start */}
                                <div className="color_mach">
                                    <span>
                                        <div className="color_circul cb"></div>
                                       Search
                                    </span>
                                    <span>7,245</span>
                                    <span>27%</span>
                                </div>

                                {/* color anticater start */}
                                <div className="color_mach">
                                    <span>
                                        <div className="color_circul co"></div>
                                        Referrals
                                    </span>
                                    <span>4,256</span>
                                    <span>8%</span>
                                </div>

                                {/* color anticater start */}
                                <div className="color_mach">
                                    <span>
                                        <div className="color_circul cr"></div>
                                        Social
                                    </span>
                                    <span>500</span>
                                    <span>7%</span>
                                </div>



                            </div>
                        </div>
                        {/* Notification start*/}
                        <div className="dounut_date">
                            <div className="card_holder_heading">
                                <h3>Notice Board</h3>
                                <MoreVertIcon />
                            </div>
                            <div className="notic_containr">
                                <div className="notice">
                                    <div className="post_date">16 June, 2019</div>
                                    <p>Great School manag mene esom text of theprinting.</p>

                                    <div class="entry-meta">
                                        Jennyfar Lopez /
                                        <span>5 min ago</span>
                                    </div>

                                </div>

                                <div className="notice">
                                    <div className="post_date cb">16 June, 2019</div>
                                    <p>Great School manag mene esom text of theprinting.</p>

                                    <div class="entry-meta">
                                        Jennyfar Lopez /
                                        <span>5 min ago</span>
                                    </div>

                                </div>

                                <div className="notice">
                                    <div className="post_date co">16 June, 2019</div>
                                    <p>Great School manag mene esom text of theprinting.</p>

                                    <div class="entry-meta">
                                        Jennyfar Lopez /
                                        <span>5 min ago</span>
                                    </div>

                                </div>

                                <div className="notice">
                                    <div className="post_date cr">16 June, 2019</div>
                                    <p>Great School manag mene esom text of theprinting.</p>

                                    <div class="entry-meta">
                                        Jennyfar Lopez /
                                        <span>5 min ago</span>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="card_Holder">
                        {Card_data.map((Cardval) => {
                            return (
                                <Card_bottom
                                    Icon={Cardval.Icon}
                                    Icon_title={Cardval.Icon_title}
                                    Member={Cardval.Member}
                                />
                            )
                        })}
                    </div>
                    <span>&copy; Copy Right By Abdul Munim 2021</span>
                </div>
            </>
        )
    }
}


export default Dashboard;