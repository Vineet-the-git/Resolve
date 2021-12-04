import React from 'react';
import "./_tasks.css";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


function Calendar() {
    return (
        <div className="sidebar-tab">
            <CalendarTodayOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Calendar</h2>
            </div>
        </div>
    )
}

export default Calendar
