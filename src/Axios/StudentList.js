import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const showAll = true; 

  useEffect(() => {
    axios
      .get("/Student.json")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="student-container">
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <strong>ID:</strong> {student.id} <br />
          <strong>Name:</strong> {student.name} <br />

          {showAll && (
            <>
              <strong>Age:</strong> {student.age} <br />
              <strong>Email:</strong> {student.email} <br />
              <strong>Phone:</strong> {student.phone} <br />
              <strong>Course:</strong> {student.course} <br />
              <strong>Year:</strong> {student.year} <br />
              <strong>GPA:</strong> {student.gpa} <br />
              <strong>City:</strong> {student.address.city}, {student.address.state} <br />
              <strong>Attendance:</strong> {student.attendance.presentDays} / {student.attendance.totalDays} days<br />
              <strong>Grades:</strong>
              <ul style={{marginLeft:20}}>
                {Object.entries(student.grades).map(([subject, grade]) => (
                  <li key={subject}>{subject}: {grade}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
