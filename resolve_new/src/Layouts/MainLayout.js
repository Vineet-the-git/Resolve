import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import "./_mainLayout.css";
import ButtonAppBar from "../Components/ButtonAppbar/ButtonAppBar";

function MainLayout({ children }) {
    return (
        <div className="mainLayout">
            <div className="button-AppBar">
                <ButtonAppBar />
            </div>

            <div className = "mainview">
                <div className="side-bar">
                    <Sidebar />
                </div>

                <div className="base">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default MainLayout
