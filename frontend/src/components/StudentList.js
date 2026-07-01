import React from "react";

function StudentList({ students, editStudent, deleteStudent }) {
  return (
    <div className="table-container">
      <table className="student-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Phone</th>
            <th>Year</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
              <td>{student.rollNumber}</td>
              <td>{student.phone}</td>
              <td>{student.year}</td>
              <td>{student.gender}</td>

              <td className="action-buttons">

                <button
                  className="edit-btn"
                  onClick={() => editStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;