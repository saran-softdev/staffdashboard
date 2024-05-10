import React, { useState } from "react";
import {
  Button,
  Modal,
  Table,
  Form,
  Row,
  Container,
  Breadcrumb
} from "react-bootstrap";
import axios from "axios";
import "../../css/fontcss.css";
import { GrFormAdd } from "react-icons/gr";

const StudentDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [marksData, setMarksData] = useState({
    tamil: "",
    english: "",
    maths: "",
    science: "",
    social: "",
    totalMarks: "",
    result: "",
    grade: ""
  });

  // Dummy student data
  const students = [
    {
      id: 1,
      name: "John",
      class: "10",
      section: "A",
      gender: "Male",
      marks: {}
    },
    {
      id: 2,
      name: "Sara",
      class: "11",
      section: "B",
      gender: "Female",
      marks: {}
    }
    // Add more students as needed
  ];

  const handleAddMark = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarksData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveModal = () => {
    // Construct the data to send to the backend
    const dataToSend = {
      studentId: selectedStudent.id,
      marks: marksData
    };

    // Send data to the backend using Axios
    axios
      .post("your-backend-url", dataToSend)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // Reset marks data and close modal
        setMarksData({
          tamil: "",
          english: "",
          maths: "",
          science: "",
          social: "",
          totalMarks: "",
          result: "",
          grade: ""
        });
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle error
      });
  };

  return (
    <Container fluid>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Exam</Breadcrumb.Item>

        <Breadcrumb.Item active>MarkUpdate</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-3 px-2 justify-content-center">
        <div className="px-2 box_shadow_container w-100">
          <Table striped bordered hover responsive>
            <thead className="heading_font_style_heading">
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Gender</th>
                <th>Add Mark</th>
              </tr>
            </thead>
            <tbody className="heading_font_style">
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.gender}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center ">
                      <GrFormAdd
                        onClick={() => handleAddMark(student)}
                        className=" fs-2"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>

      <Row>
        <Modal show={showModal} onHide={handleCloseModal} className=" p-0 m-0">
          <Modal.Header closeButton>
            <Modal.Title className=" heading_font_style_heading">
              Add Marks
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedStudent && (
              <div>
                <p className=" heading_font_style_heading">
                  Name: {selectedStudent.name}
                </p>
                <p className=" heading_font_style_heading">
                  Class: {selectedStudent.class}
                </p>
                <p className=" heading_font_style_heading">
                  Section: {selectedStudent.section}
                </p>
                <Form.Group controlId="tamilMarks">
                  <Form.Label className=" heading_font_style_heading">
                    Tamil
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter marks for Tamil"
                    name="tamil"
                    value={marksData.tamil}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group controlId="englishMarks">
                  <Form.Label className=" heading_font_style_heading">
                    English
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter marks for English"
                    name="english"
                    value={marksData.english}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group controlId="mathsMarks">
                  <Form.Label className=" heading_font_style_heading">
                    Maths
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter marks for Maths"
                    name="maths"
                    value={marksData.maths}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group controlId="scienceMarks">
                  <Form.Label className=" heading_font_style_heading">
                    Science
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter marks for Science"
                    name="science"
                    value={marksData.science}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group controlId="socialMarks">
                  <Form.Label className=" heading_font_style_heading">
                    Social
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter marks for Social"
                    name="social"
                    value={marksData.social}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>

                <Form.Group controlId="result">
                  <Form.Label className=" heading_font_style_heading">
                    Result
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter result"
                    name="result"
                    value={marksData.result}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group controlId="grade">
                  <Form.Label className=" heading_font_style_heading">
                    Grade
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter grade"
                    name="grade"
                    value={marksData.grade}
                    onChange={handleInputChange}
                    className="heading_font_style"
                  />
                </Form.Group>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className=" d-flex justify-content-center align-items-center ">
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              className=" heading_font_style button_size_container"
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSaveModal}
              className=" heading_font_style button_size_container"
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default StudentDetails;
