
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { path: "/", icon: "📊", label: "Dashboard" },
    { path: "/students", icon: "🎓", label: "Students" },
    { path: "/departments", icon: "🏫", label: "Departments" },
    { path: "/reports", icon: "📈", label: "Reports" },
    { path: "/settings", icon: "⚙️", label: "Settings" },
    { path: "/attendance", icon: "📅", label: "Attendance" },
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">🎓 Student ERP</h2>

      <ul className="menu">
        {menu.map((item) => (
          <li
            key={item.path}
            className={
              location.pathname === item.path
                ? "menu-item active"
                : "menu-item"
            }
          >
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                gap: "10px",
                width: "100%",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="logout-btn"
        onClick={() => window.location.reload()}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default Sidebar;

