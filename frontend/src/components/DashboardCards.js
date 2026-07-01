import React from "react";

function DashboardCards({ totalStudents }) {
  return (
    <div className="dashboard-cards">

      <div className="card-box">
        <h3>👨‍🎓 Total Students</h3>
        <h1>{totalStudents}</h1>
      </div>

      <div className="card-box">
        <h3>🏫 Departments</h3>
        <h1>{totalStudents > 0 ? totalStudents : 0}</h1>
      </div>

      <div className="card-box">
        <h3>📋 Active Records</h3>
        <h1>{totalStudents}</h1>
      </div>

      <div className="card-box">
        <h3>📈 Growth</h3>
        <h1>{totalStudents * 10}%</h1>
      </div>

    </div>
  );
}

export default DashboardCards;