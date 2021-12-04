import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import React from 'react';
import "./_tasks.css";


function Tasks() {
    return (
        <div className="sidebar-tab">
            <FormatListBulletedOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Tasks</h2>
            </div>
        </div>
    )
}

export default Tasks
