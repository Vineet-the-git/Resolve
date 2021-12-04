import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React from 'react';
import "./_tasks.css";


function Help() {
    return (
        <div className="sidebar-tab">
            <HelpOutlineOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Help</h2>
            </div>
        </div>
    )
}

export default Help
