import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
  Breadcrumb
} from "react-bootstrap";
import "../../css/fontcss.css";
const StudentAttendanceViewPage = () => {
  return (
    <Container fluid>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Student</Breadcrumb.Item>

        <Breadcrumb.Item active>AttendanceView</Breadcrumb.Item>
      </Breadcrumb>
      <div className="box_shadow_container">
        <Row className="justify-content-center align-items-center mt-1">
          {/* <h4 className="text-center fw-bold">Student View Attendance</h4> */}

          <Col xs={12} sm={8} md={6} lg={4}>
            <div className=" ">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="heading_font_style_heading">
                    Class:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Select Class"
                    className="heading_font_style"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="heading_font_style_heading">
                    Section:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Select Section"
                    className="heading_font_style"
                  />
                </Form.Group>
                <div className=" d-flex justify-content-center align-items-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="heading_font_style button_size_container"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center flex-wrap">
          <div className=" d-flex justify-content-center mt-3">
            <Table striped bordered hover responsive>
              <thead className=" heading_font_style_heading">
                <tr>
                  <th>Si/no</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Class</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className=" heading_font_style">
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>10th</td>
                  <td>Male</td>
                  <td>16</td>
                  <td>123 Main St, City</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane</td>
                  <td>Smith</td>
                  <td>9th</td>
                  <td>Female</td>
                  <td>15</td>
                  <td>456 Elm St, Town</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Michael</td>
                  <td>Johnson</td>
                  <td>11th</td>
                  <td>Male</td>
                  <td>17</td>
                  <td>789 Oak St, Village</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Emily</td>
                  <td>Williams</td>
                  <td>10th</td>
                  <td>Female</td>
                  <td>16</td>
                  <td>101 Pine St, City</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>James</td>
                  <td>Brown</td>
                  <td>12th</td>
                  <td>Male</td>
                  <td>18</td>
                  <td>321 Maple St, Town</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Olivia</td>
                  <td>Miller</td>
                  <td>9th</td>
                  <td>Female</td>
                  <td>15</td>
                  <td>654 Cedar St, Village</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>William</td>
                  <td>Davis</td>
                  <td>11th</td>
                  <td>Male</td>
                  <td>17</td>
                  <td>987 Birch St, City</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Sophia</td>
                  <td>Wilson</td>
                  <td>10th</td>
                  <td>Female</td>
                  <td>16</td>
                  <td>246 Spruce St, Town</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Alexander</td>
                  <td>Anderson</td>
                  <td>12th</td>
                  <td>Male</td>
                  <td>18</td>
                  <td>789 Pine St, Village</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Isabella</td>
                  <td>Martin</td>
                  <td>9th</td>
                  <td>Female</td>
                  <td>15</td>
                  <td>369 Oak St, City</td>
                  <td>Absent</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default StudentAttendanceViewPage;
