import React from "react";
import * as XLSX from "xlsx";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Students(props) {

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(props.students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Students"
    );

    XLSX.writeFile(
      workbook,
      "Student_List.xlsx"
    );
  };

  return (
    <>
      <button
        className="export-btn"
        onClick={exportToExcel}
      >
        📥 Export Excel
      </button>

      <input
        type="text"
        placeholder="Search Student..."
        className="search-box"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <StudentForm
        student={props.student}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        editingId={props.editingId}
      />

      <StudentList
        students={props.students}
        editStudent={props.editStudent}
        deleteStudent={props.deleteStudent}
      />

      <div className="student-cards">
        {props.students.map((student) => (
          <div key={student.id} className="student-card">

            <div className="avatar">
              {student.name.charAt(0).toUpperCase()}
            </div>

            <h3>{student.name}</h3>

            <p>🎓 {student.department}</p>
            <p>📧 {student.email}</p>

          </div>
        ))}
      </div>
    </>
  );
}

export default Students;