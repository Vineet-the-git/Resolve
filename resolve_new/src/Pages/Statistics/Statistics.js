import React from 'react';
import "C:/Users/vinee/Desktop/Resolve/resolve_new/src/Pages/Statistics/_statistics.css";

function Statistics() {
    return (
        <div className="main_template">
            <div className="grid-item">
                <h3>Overview</h3>
                <div className='overview-entries'>
                    <h2 className='td td1'>15</h2>
                    <h2 className='td'>15</h2>
                    <h2 className='td'>8:25</h2>
                    <h2 className='td td2'>1656</h2>
                    <h2 className='td'>2512</h2>
                    <h2 className='td'>1024:32</h2>
                </div>
            </div>
            <div className="grid-item">
                Achievement Score
            </div>
            <div className="grid-item">
                Completetion Rate
            </div>
            <div className="grid-item">
                Completed Task Percentage
            </div>

        </div>
    )
}

export default Statistics
