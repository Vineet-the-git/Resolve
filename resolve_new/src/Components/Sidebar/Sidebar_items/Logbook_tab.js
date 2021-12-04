import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import React from 'react';
import "./_tasks.css";


function Logbook() {
    return (
        <div className="sidebar-tab">
            <FormatListBulletedOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Logbook</h2>
            </div>
        </div>
    )
}

export default Logbook
