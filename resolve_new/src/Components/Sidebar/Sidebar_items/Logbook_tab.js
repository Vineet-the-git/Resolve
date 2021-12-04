import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import React from 'react';
import "./_tasks.css";


function Logbook() {
    return (
        <div className="sidebar-tab">
            <MenuBookOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Logbook</h2>
            </div>
        </div>
    )
}

export default Logbook
