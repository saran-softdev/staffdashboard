import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Breadcrumb
} from "react-bootstrap";
import "./StudentAttendance.css";
import "../../css/fontcss.css";

const StudentAttendance = () => {
  // State variables for tracking attendance
  const [attendance, setAttendance] = useState([]);

  // Function to handle attendance change
  const handleAttendanceChange = (index, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index] = status;
    setAttendance(updatedAttendance);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform API call or any other action with attendance data
    console.log("Attendance:", attendance);
  };

  // Sample data for demonstration
  const studentData = [
    {
      id: 1,
      name: "Mark Otto",
      admissionNumber: "1234"
    },
    {
      id: 2,
      name: "Jacob Thornton",
      admissionNumber: "5678"
    },
    {
      id: 3,
      name: "Larry Bird",
      admissionNumber: "91011"
    }
  ];
  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  const classTeacherName = "10th-std";

  return (
    <Container fluid>
      <Breadcrumb className="heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Student</Breadcrumb.Item>
        <Breadcrumb.Item active>Attendance</Breadcrumb.Item>
      </Breadcrumb>
      <div className="box_shadow_container">
        <Row className="heading_font_style">
          <Col>
            <div className="text-center">
              <p className="m-0 p-0 content_font_style">
                Class Name: {classTeacherName} | Date: {formattedDate}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="heading_font_style_heading">
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Admission Number</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody className="heading_font_style">
                {studentData.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.admissionNumber}</td>
                    <td>
                      <Form.Check
                        className="checkbox_container"
                        type="checkbox"
                        id={`present${student.id}`}
                        checked={attendance[index] === "present"}
                        onChange={() =>
                          handleAttendanceChange(index, "present")
                        }
                      />
                    </td>
                    <td>
                      <Form.Check
                        className="checkbox_container"
                        type="checkbox"
                        id={`absent${student.id}`}
                        checked={attendance[index] === "absent"}
                        onChange={() => handleAttendanceChange(index, "absent")}
                        style={{
                          borderColor: "#000000",
                          outlineColor: "#3c3434",
                          borderWidth: "5px"
                        }} // Change the color codes to your desired colors
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex justify-content-center align-items-center w-100">
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="heading_font_style button_size_container"
            >
              Submit
            </Button>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default StudentAttendance;
