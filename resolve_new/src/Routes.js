import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Tasks from "./Pages/Tasks/Tasks";
import Statistics from "./Pages/Statistics/Statistics";
import Calendar from "./Pages/Calendar/Calendar";
import Logbook from "./Pages/Logbook/Logbook";
import Contactus from "./Pages/ContactUs/Contactus";
import Help from "./Pages/Help/Help";
import MainLayout from "./Layouts/MainLayout";
import Profile from "./Pages/Profile/Profile";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/profile" exact>
                        <MainLayout>
                            <Profile />
                        </MainLayout>
                    </Route>
                    <Route path="/tasks">
                        <MainLayout>
                            <Tasks />
                        </MainLayout>
                    </Route>
                    <Route path="/statistics" exact>
                        <MainLayout>
                            <Statistics />
                        </MainLayout>
                    </Route>
                    <Route path="/calendar" exact>
                        <MainLayout>
                            <Calendar />
                        </MainLayout>
                    </Route>
                    <Route path="/logbook" exact>
                        <MainLayout>
                            <Logbook />
                        </MainLayout>
                    </Route>
                    <Route path="/contactus" exact>
                        <MainLayout>
                            <Contactus />
                        </MainLayout>
                    </Route>
                    <Route path="/help" exact>
                        <MainLayout>
                            <Help />
                        </MainLayout>
                    </Route>
                    <Route path="/">
                        <MainLayout>
                            <Tasks />
                        </MainLayout>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}