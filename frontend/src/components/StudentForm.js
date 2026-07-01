import React from "react";

function StudentForm({
  student,
  handleChange,
  handleSubmit,
  editingId,
}) {
  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={student.department}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={student.email}
        onChange={handleChange}
        required
      />
      <input
         type="text"
        name="rollNumber"
        placeholder="Roll Number"
        value={student.rollNumber}
        onChange={handleChange}
      />

<input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={student.phone}
  onChange={handleChange}
/>

<input
  type="text"
  name="year"
  placeholder="Year"
  value={student.year}
  onChange={handleChange}
/>

<select
  name="gender"
  value={student.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
      </select>

      <button type="submit" className="submit-btn">
        {editingId ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;