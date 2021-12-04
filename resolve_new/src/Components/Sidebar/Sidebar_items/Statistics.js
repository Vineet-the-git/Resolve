import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import React from 'react';
import "./_tasks.css";


function statistics() {
    return (
        <div className="sidebar-tab">
            <EqualizerOutlinedIcon />
            <div className="sidebar-tab-name">
                <h2>Statistics</h2>
            </div>
        </div>
    )
}

export default statistics
