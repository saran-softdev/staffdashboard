import React, { useRef, useState } from "react";
import { Container, Row, Form, Button, Breadcrumb } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import "../../css/fontcss.css";
const HomeWork = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    classNo: "",
    classSection: "",
    subject: "",
    homeWorkTopic: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append("file", fileInputRef.current.files[0]);
    // Add logic to submit formDataToSend to the backend
    console.log("Form submitted!", formDataToSend);
  };

  const handleDeleteFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Container fluid>
       <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
        <Breadcrumb.Item>Student</Breadcrumb.Item>

        <Breadcrumb.Item active>HomeWork</Breadcrumb.Item>
      </Breadcrumb>
      <div className="box_shadow_container">
      <Row className="d-flex justify-content-center  px-2">
        {/* <span className="text-center heading_font_style_heading1 my-2">
          HomeWork Details:
        </span> */}
        <Form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <Row className="flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="formBasicClassNo"
              style={{ flex: "1 1 100%" }}
            >
              <Form.Label>
                <p className=" heading_font_style_heading p-0 m-0">Class:</p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Class"
                name="classNo"
                value={formData.classNo}
                onChange={handleChange}
                className=" heading_font_style"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicClassSection"
              style={{ flex: "1 1 100%" }}
            >
              <Form.Label>
                <p className=" heading_font_style_heading p-0 m-0">
                  Class Section:
                </p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Class Section"
                name="classSection"
                value={formData.classSection}
                onChange={handleChange}
                className=" heading_font_style"

              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicSubject"
              style={{ flex: "1 1 100%" }}
            >
              <Form.Label>
                <p className=" heading_font_style_heading p-0 m-0">Subject:</p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className=" heading_font_style"

              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicHomeWorkTopic"
              style={{ flex: "1 1 100%" }}
            >
              <Form.Label>
                <p className=" heading_font_style_heading p-0 m-0">
                  HomeWork Topic:
                </p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Homework Topic"
                name="homeWorkTopic"
                value={formData.homeWorkTopic}
                onChange={handleChange}
                className=" heading_font_style"

              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formFile"
              style={{ flex: "1 1 100%" }}
            >
              <Form.Label>
                <p className=" heading_font_style_heading p-0 m-0">
                  Upload Assignment File:
                </p>
              </Form.Label>
              <Form.Control
                type="file"
                ref={fileInputRef}
                className=" heading_font_style"
              />
              <span className="d-flex align-items-center justify-content-center mt-2">
                <Form.Label className="m-0 p-0 heading_font_style">
                  <>You want to delete this file:</>
                </Form.Label>
                <AiOutlineDelete
                  onClick={handleDeleteFile}
                  className="text-danger ms-1 fs-5"
                  style={{ cursor: "pointer" }}
                />
              </span>
            </Form.Group>

            <div className=" d-flex justify-content-center align-items-center w-100">
            <Button
              variant="primary"
              type="submit"
             
              className=" heading_font_style button_size_container"
            >
              Submit
            </Button>
            </div>
          </Row>
        </Form>
      </Row>
      </div>
    </Container>
  );
};

export default HomeWork;
