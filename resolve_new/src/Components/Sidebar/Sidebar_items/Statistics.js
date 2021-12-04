import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import React from 'react';
import "./_tasks.css";


function statistics() {
    return (
        <div className="sidebar-tab">
            <FormatListBulletedOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Statistics</h2>
            </div>
        </div>
    )
}

export default statistics
