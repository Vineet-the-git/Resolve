import React from 'react';
import "./_sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import TasksOption from './Sidebar_items/Tasks';
import StatisticsOption from './Sidebar_items/Statistics';
import LogbookOption from './Sidebar_items/Logbook_tab';
import CalendarOption from './Sidebar_items/Calendar_tab';
import ContactUsOption from './Sidebar_items/ContactUs_tab';
import HelpOption from './Sidebar_items/Help_tab';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://avatars.githubusercontent.com/u/80666035?s=400&u=8beb83d2960c259d702f9f4296b900d1f135b101&v=4" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>

            <div className="sidebar_chats">
                <TasksOption />
                <StatisticsOption />
                <LogbookOption/>
                <CalendarOption/>
                <ContactUsOption/>
                <HelpOption/>

            </div>

        </div>
    )
}

export default Sidebar
