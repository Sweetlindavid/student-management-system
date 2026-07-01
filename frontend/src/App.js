
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Departments from "./components/Departments";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Attendance from "./components/Attendance";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const API = "http://localhost:8080/students";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [student, setStudent] = useState({
    name: "",
    department: "",
    email: "",
    rollNumber: "",
    phone: "",
    year: "",
    gender: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (error) {
      toast.error("Failed to fetch students");
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, student);
        toast.success("Student Updated Successfully");
        setEditingId(null);
      } else {
        await axios.post(API, student);
        toast.success("Student Added Successfully");
      }

      setStudent({
        name: "",
        department: "",
        email: "",
        rollNumber: "",
        phone: "",
        year: "",
        gender: "",
      });

      fetchStudents();
    } catch (error) {
      toast.error("Operation Failed");
    }
  };

  const editStudent = (studentData) => {
    setStudent({
      name: studentData.name,
      department: studentData.department,
      email: studentData.email,
      rollNumber: studentData.rollNumber,
      phone: studentData.phone,
      year: studentData.year,
      gender: studentData.gender,
    });

    setEditingId(studentData.id);
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Delete this student?")) {
      try {
        await axios.delete(`${API}/${id}`);
        toast.success("Student Deleted Successfully");
        fetchStudents();
      } catch (error) {
        toast.error("Delete Failed");
      }
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <Login onLogin={() => setIsLoggedIn(true)} />
    );
  }

  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <div className="main-content">

          <Routes>

            <Route
              path="/"
              element={
                <Dashboard
                  totalStudents={students.length}
                />
              }
            />

            <Route
              path="/students"
              element={
                <Students
                  search={search}
                  setSearch={setSearch}
                  student={student}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  editingId={editingId}
                  students={filteredStudents}
                  editStudent={editStudent}
                  deleteStudent={deleteStudent}
                />
              }
            />

            <Route
              path="/departments"
              element={<Departments />}
            />
            <Route
  path="/attendance"
  element={<Attendance students={students} />}
/>

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

          <ToastContainer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

