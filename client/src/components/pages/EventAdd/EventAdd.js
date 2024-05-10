import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "../../css/fontcss.css";
const EventAdd = () => {
  const [formData, setFormData] = useState({
    event: "",
    description: "",
    fromDate: "",
    toDate: "",
    startTime: "",
    endTime: "",
    fromClass: "",
    toClass: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container fluid>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Event</Breadcrumb.Item>

        <Breadcrumb.Item active>EventAdd</Breadcrumb.Item>
      </Breadcrumb>
      {/* <h1 className=" text-center my-3">Event Add</h1> */}
      <Row className=" px-2">
        <div className=" d-flex align-items-center justify-content-center px-2 flex-column box_shadow_container ">
          <Form className="w-100">
            <Row>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="event">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">Event</p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    placeholder="Event"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="description">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      Description
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="fromDate">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      From Date
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    placeholder="From Date"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="toDate">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      {" "}
                      To Date
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    placeholder="To Date"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="startTime">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      Start Time
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    placeholder="Start Time"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="endTime">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      End Time
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    placeholder="End Time"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="fromClass">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      From Class
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fromClass"
                    value={formData.fromClass}
                    onChange={handleChange}
                    placeholder="From Class"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="toClass">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">
                      To Class
                    </p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="toClass"
                    value={formData.toClass}
                    onChange={handleChange}
                    placeholder="To Class"
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4} className=" mb-3">
                <Form.Group controlId="image">
                  <Form.Label className="">
                    <p className=" heading_font_style_heading p-0 m-0">Image</p>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="heading_font_style"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div>
            <Button className=" heading_font_style button_size_container ">Submit</Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default EventAdd;
