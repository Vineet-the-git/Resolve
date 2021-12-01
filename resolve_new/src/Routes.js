import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Tasks from "./Tasks";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Logbook from "./Logbook"; 
import Contactus from "./Contactus";
import Help from "./Help";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/tasks">
                        <Tasks />
                    </Route>
                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                    <Route path="/calendar">
                        <Calendar />
                    </Route>
                    <Route path="/logbook">
                        <Logbook />
                    </Route>
                    <Route path="/contactus">
                        <Contactus />
                    </Route>
                    <Route path="/help">
                        <Help />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}