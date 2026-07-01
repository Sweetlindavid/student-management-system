import React, { useState } from "react";

function Attendance({ students }) {
const [attendance, setAttendance] = useState({});

const markAttendance = (id, status) => {
setAttendance({
...attendance,
[id]: status,
});
};

return ( <div className="page-box"> <h1>📅 Attendance Management</h1>

```
  <table className="student-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Status</th>
        <th>Attendance</th>
      </tr>
    </thead>

    <tbody>
      {students.map((student) => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.department}</td>

          <td>
            <button
              className="present-btn"
              onClick={() =>
                markAttendance(student.id, "Present")
              }
            >
              Present
            </button>

            <button
              className="absent-btn"
              onClick={() =>
                markAttendance(student.id, "Absent")
              }
            >
              Absent
            </button>
          </td>

          <td>
            {attendance[student.id] || "Not Marked"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


);
}

export default Attendance;
