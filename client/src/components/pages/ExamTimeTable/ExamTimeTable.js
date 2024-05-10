import React, { useState } from "react";
import {
  Form,
  Button,
  Table,
  Modal,
  Row,
  Col,
  Container,
  Breadcrumb
} from "react-bootstrap";
import "../../css/fontcss.css";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    className: "",
    classSection: "",
    examDate: "",
    examFromTime: "",
    examToTime: "",
    portionTitle: "",
    portionDescription: "",
    totalMarks: "",
    passMarks: ""
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      className: "",
      classSection: "",
      examDate: "",
      examFromTime: "",
      examToTime: "",
      portionTitle: "",
      portionDescription: "",
      totalMarks: "",
      passMarks: ""
    });
  };

  const handleDelete = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  const handleUpdate = (index) => {
    setSelectedIndex(index);
    setFormData(submittedData[index]);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = () => {
    const newData = [...submittedData];
    newData[selectedIndex] = formData;
    setSubmittedData(newData);
    setShowUpdateModal(false);
  };

  return (
    <Container>
      <Row className=" ">
        <Breadcrumb className=" heading_font_style">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Exam</Breadcrumb.Item>

          <Breadcrumb.Item active>Exam TimeTable</Breadcrumb.Item>
        </Breadcrumb>
        <div className=" d-flex flex-column justify-content-center align-items-center ">
          <div className=" m-0 p-0 box_shadow_container">
            <Form
              onSubmit={handleSubmit}
              className="d-flex flex-wrap justify-content-center"
            >
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">Class</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Class"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    Class Section
                  </p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Class Section"
                  name="classSection"
                  value={formData.classSection}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                     Date
                  </p>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Exam Date"
                  name="examDate"
                  value={formData.examDate}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                   From Time
                  </p>
                </Form.Label>
                <Form.Control
                  type="time"
                  placeholder="From Time"
                  name="examFromTime"
                  value={formData.examFromTime}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    End Time
                  </p>
                </Form.Label>
                <Form.Control
                  type="time"
                  placeholder="End  Time"
                  name="examToTime"
                  value={formData.examToTime}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    Portion Title
                  </p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Portion Title"
                  name="portionTitle"
                  value={formData.portionTitle}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    Portion Description
                  </p>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Portion Description"
                  name="portionDescription"
                  value={formData.portionDescription}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    Total Marks
                  </p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Total Marks"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} lg={4} className="p-3">
                <Form.Label>
                  <p className=" heading_font_style_heading p-0 m-0">
                    Pass Marks
                  </p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pass Marks"
                  name="passMarks"
                  value={formData.passMarks}
                  onChange={handleChange}
                  className="heading_font_style"
                />
              </Form.Group>
              <div className="d-flex justify-content-center button_size_container">
                <Button
                  variant="primary"
                  type="submit"
                  className="my-2 heading_font_style button_size_container"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Row>

      {submittedData.length > 0 && (
        <Row className="mt-3">
          <h3 className="text-center heading_font_style_heading">
            Exam Time Table
          </h3>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="px-3">
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-wrap justify-content-center"
              >
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Class
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter class"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Class Section
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter class section"
                    name="classSection"
                    value={formData.classSection}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    {" "}
                    Exam Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter exam date"
                    name="examDate"
                    value={formData.examDate}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Exam From Time
                  </Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Enter exam from time"
                    name="examFromTime"
                    value={formData.examFromTime}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Exam To Time
                  </Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Enter exam to time"
                    name="examToTime"
                    value={formData.examToTime}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Portion Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter portion title"
                    name="portionTitle"
                    value={formData.portionTitle}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Portion Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter portion description"
                    name="portionDescription"
                    value={formData.portionDescription}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Total Marks
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter total marks"
                    name="totalMarks"
                    value={formData.totalMarks}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="p-3">
                  <Form.Label className=" heading_font_style_heading">
                    Pass Marks
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter pass marks"
                    name="passMarks"
                    value={formData.passMarks}
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="my-2 heading_font_style_heading"
              >
                Submit
              </Button>
            </div>
          </div>
        </Row>
      )}

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className=" heading_font_style_heading">
            Update Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="className">
              <Form.Label className=" heading_font_style_heading">
                Class
              </Form.Label>
              <Form.Control
                className="heading_font_style"
                type="text"
                placeholder="Enter class"
                name="className"
                value={formData.className}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className=" heading_font_style_heading"
            onClick={() => setShowUpdateModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className=" heading_font_style_heading"
            onClick={handleUpdateSubmit}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClientForm;
