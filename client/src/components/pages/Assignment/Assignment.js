import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import "./Assignment.css";
import "../../css/fontcss.css";

const Assignment = () => {
  const fileInputRef = useRef(null);
  const options = [
    { id: 1, value: "Tamil" },
    { id: 2, value: "English" },
    { id: 3, value: "Maths" },
    { id: 4, value: "Science" },
    { id: 5, value: "Social" }
  ];

  const sectionOptions = [];
  const initialFormData = {
    id: 0,
    classId: "",
    sectionId: "",
    subjectId: "",
    title: "",
    description: "",
    startDate: "",
    endDate: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IktTVDFTMDAwMDEiLCJhZG1pbmlzdHJhdGlvbklkIjoxLCJyb2xlIjoiU3RhZmYiLCJhZG1pc3Npb25ObyI6IktTVCIsInJlZ2lzdHJhdGlvbk5vIjoiLSIsIm1lbWJlckNoZWNrIjoxMiwic2VuZEVtYWlsIjoiWWVzIiwic2VuZFNtcyI6Ik5vIiwiaWF0IjoxNzEzMzI4MjkzLCJleHAiOjE3NDQ4NjQyOTN9.5pG6iGAgLE3b7Kjsae0lUAz-GHPG-Yuom46xOOA0dXY";
      const response = await axios.post(
        "http://192.168.2.112:9111/assignment/create_update_assignment",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("Assignment submitted successfully", response.data);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting assignment:", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    if (name == "classId" || name == "sectionId" || name == "subjectId") {
      value = parseInt(value);
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Container fluid className="whole_container whole_container1">
      <Breadcrumb className="heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Student</Breadcrumb.Item>
        <Breadcrumb.Item active>Assignment</Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex flex-wrap justify-content-center">
        <Form
          onSubmit={handleSubmit}
          className="box_shadow_container mt-3 p-3 heading_font_style_heading"
        >
          <span className="my-3 w-100 heading_font_style_heading1 heading_underline_curved_style">
            <p className="p-0 m-0 heading_font_style_heading1 ">
              Assignment Details:
            </p>
          </span>

          <Row>
            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">Class:</p>
              </Form.Label>
              <Form.Control
                as="select"
                name="classId"
                placeholder="Select Class"
                className="heading_font_style"
                value={formData.classId}
                onChange={handleChange}
              >
                <option value="" className="heading_font_style">
                  Select Class
                </option>
                {options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </Form.Control>
            </Col>

            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">Section:</p>
              </Form.Label>
              <Form.Control
                type="text"
                name="sectionId"
                placeholder="Class Section"
                className="heading_font_style"
                value={formData.sectionId}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">Subject:</p>
              </Form.Label>
              <Form.Control
                type="text"
                name="subjectId"
                placeholder="Enter Subject"
                className="heading_font_style"
                value={formData.subjectId}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">
                  Assignment Title:
                </p>
              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Assignment Title"
                className="heading_font_style"
                value={formData.title}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">
                  Title Description:
                </p>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Title Description"
                className="heading_font_style"
                value={formData.description}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">
                  Start Date:
                </p>
              </Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="heading_font_style"
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} className="mb-3 p-2">
              <Form.Label>
                <p className="heading_font_style_heading p-0 m-0">End Date:</p>
              </Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate}
                className="heading_font_style"
              />
            </Col>

            <Col xs={12} className="mb-3 p-2">
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button variant="primary" type="submit" disabled={submitting} className="heading_font_style button_size_container">
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Assignment;
