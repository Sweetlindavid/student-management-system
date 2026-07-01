import React from "react";
import DashboardCards from "./DashboardCards";
import {Link} from 'react-router-dom'

function Dashboard({ totalStudents }) {
  return (
    <>
    <Link to="/students"> <button>click</button></Link>
   
      <div className="page-header">
        <h1>🎓 Student Management Dashboard</h1>
        <p>Manage students, departments and academic records</p>
      </div>

      <DashboardCards totalStudents={totalStudents} />
    </>
  );
}

export default Dashboard;