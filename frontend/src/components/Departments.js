import React from "react";

function Departments() {
  const departments = [
    "Computer Science Engineering",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
  ];

  return (
    <div className="page-box">
      <h1>🏫 Departments</h1>

      {departments.map((dept, index) => (
        <div key={index} className="department-card">
          {dept}
        </div>
      ))}
    </div>
  );
}

export default Departments;