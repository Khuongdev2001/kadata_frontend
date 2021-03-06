import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import LoginContainer from "./screens/user/LoginContainer";
import DashboardContainer from "./screens/dashboard/DashboardContainer";
import Logged from "./components/layout/Logged";
import CustomerContainer from "./screens/customer/CustomerContainer";
import StaffContainer from "./screens/staff/StaffContainer";
import AdminContainer from "./screens/admin/AdminContainer";
import WageContainer from "./screens/wage/WageContainer";
import LevelContainer from "./screens/wage/components/pages/level/LevelContainer";
import FeedbackContainer from "./screens/feedback/FeedbackContainer";
import ResultEventContainer from "./screens/resultEvent/ResultEventContainer";

function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginContainer />} />
                <Route path="/dashboard" element={<Logged><DashboardContainer /></Logged>} />
                <Route path="/dashboard/:id" element={<Logged><ResultEventContainer/></Logged>}/>
                <Route path="/customer" element={<Logged><CustomerContainer /></Logged>} />
                <Route path="/staff" element={<Logged><StaffContainer /></Logged>} />
                <Route path="/admin" element={<Logged><AdminContainer /></Logged>} />
                <Route path="/wage" element={<Logged><WageContainer /></Logged>} />
                <Route path="/wage/level" element={<Logged><LevelContainer /></Logged>} />
                <Route path="/feedback" element={<Logged><FeedbackContainer /></Logged>} />
            </Routes>
        </Router>
    )
}

export default RouterPage;