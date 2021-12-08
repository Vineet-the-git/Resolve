import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import "./_mainLayout.css";


function MainLayout({ children }) {
    return (
        <div className="mainLayout">

            <div className="side-bar">
                <Sidebar />
            </div>

            <div className="mainview">
                <div className="title_bar">
                    <h3>Title_bar</h3>
                </div>

                <div className="base">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default MainLayout
