import React from "react";
import { Table, Container, Breadcrumb, Row } from "react-bootstrap";
import "../../css/fontcss.css";
const sampleStudents = [
  {
    name: "John Doe",
    grade: "A",
    remark: "Excellent",
    totalMarks: 95
  },
  {
    name: "Jane Smith",
    grade: "B",
    remark: "Good",
    totalMarks: 85
  },
  {
    name: "Alice Johnson",
    grade: "C",
    remark: "Average",
    totalMarks: 75
  },
  {
    name: "Bob Brown",
    grade: "A",
    remark: "Excellent",
    totalMarks: 92
  },
  {
    name: "Emily Davis",
    grade: "B",
    remark: "Good",
    totalMarks: 88
  },
  {
    name: "Michael Wilson",
    grade: "C",
    remark: "Average",
    totalMarks: 78
  },
  {
    name: "Sarah Taylor",
    grade: "A",
    remark: "Excellent",
    totalMarks: 97
  },
  {
    name: "David Martinez",
    grade: "B",
    remark: "Good",
    totalMarks: 83
  },
  {
    name: "Olivia Anderson",
    grade: "C",
    remark: "Average",
    totalMarks: 99
  },
  {
    name: "James Garcia",
    grade: "A",
    remark: "Excellent",
    totalMarks: 99
  }
];

// Group students by totalMarks
const groupedStudents = sampleStudents.reduce((acc, student) => {
  const { totalMarks } = student;
  if (!acc[totalMarks]) {
    acc[totalMarks] = [];
  }
  acc[totalMarks].push(student);
  return acc;
}, {});

// Sort unique totalMarks in descending order
const uniqueTotalMarks = Object.keys(groupedStudents).sort((a, b) => b - a);

// Assign rank to students
let rank = 1;
const rankedStudents = uniqueTotalMarks.flatMap((totalMarks) => {
  const studentsWithSameTotalMarks = groupedStudents[totalMarks];
  const rankedStudentsWithSameTotalMarks = studentsWithSameTotalMarks.map(
    (student) => ({
      ...student,
      rank
    })
  );
  rank += studentsWithSameTotalMarks.length;
  return rankedStudentsWithSameTotalMarks;
});

const StudentTable = ({ students }) => {
  return (
    <Container>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Grade</Breadcrumb.Item>

        <Breadcrumb.Item active>OverAllGrade</Breadcrumb.Item>
      </Breadcrumb>
      <Row className=" px-2">
      <div className="box_shadow_container">
        <Table striped bordered hover responsive>
          <thead className=" heading_font_style_heading">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Remark</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody className="heading_font_style">
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.rank}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.remark}</td>
                <td>{student.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <div>
      {/* <h1 className=" text-center my-3">Student Information</h1> */}
      <StudentTable students={rankedStudents} />
    </div>
  );
};

export default App;
