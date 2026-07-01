package com.student.student_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.student_management.entity.Attendance;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {

}