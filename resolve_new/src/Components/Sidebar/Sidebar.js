import React from 'react';
import "./_sidebar.css";
import { Avatar, IconButton } from '@mui/material';
import TasksOption from './Sidebar_items/Tasks';
import StatisticsOption from './Sidebar_items/Statistics';
import LogbookOption from './Sidebar_items/Logbook_tab';
import CalendarOption from './Sidebar_items/Calendar_tab';
import ContactUsOption from './Sidebar_items/ContactUs_tab';
import HelpOption from './Sidebar_items/Help_tab';
import { useHistory } from 'react-router';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


function Sidebar() {

    const history = useHistory();
    const [value, setValue] = React.useState(history.location.pathname);

    const handleChange = (newValue) => {
        setValue(newValue);
        history.push(newValue);
        console.log(newValue);
    };
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className = "sidebar_headerLeft">
                    <Avatar src="https://avatars.githubusercontent.com/u/80666035?s=400&u=8beb83d2960c259d702f9f4296b900d1f135b101&v=4" />
                </div>

                <div className="sidebar_headerRight">
                    <IconButton id="icon">
                        <StarOutlineIcon />
                    </IconButton>
                    <IconButton id="icon">
                        <NotificationsActiveOutlinedIcon />
                    </IconButton>
                </div>

            </div>

            <div className="sidebar_items" >
                <div className="item" onClick={(event) => handleChange("/tasks")}>
                    <TasksOption />
                </div>

                <div className="item" onClick={(event) => handleChange("/statistics")}>
                    <StatisticsOption />
                </div>

                <div className="item" onClick={(event) => handleChange("/logbook")}>
                    <LogbookOption />
                </div>

                <div className="item" onClick={(event) => handleChange("/calendar")}>
                    <CalendarOption />
                </div>

                <div className="item" onClick={(event) => handleChange("/contactus")}>
                    <ContactUsOption />
                </div>

                <div className="item" onClick={(event) => handleChange("/help")}>
                    <HelpOption />
                </div>

            </div>

        </div >
    )
}

export default Sidebar
