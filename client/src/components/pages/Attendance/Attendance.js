import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Attendance.css";
import "../../css/fontcss.css"

const Attendance = () => {
  const [present, setPresent] = useState(90);
  const [absent, setAbsent] = useState(10);

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item active>
 
          <p className="heading_font_style m-0">
            / Attendance
          </p>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="box_shadow_container">
      <Row className="justify-content-center align-items-center mt-2">
        <Col xs={12} md={6}>
          <h3 className=" text-center">
            {/* <p className=" heading_font_style">Attendance Chart</p> */}
          </h3>
          <ProgressBar>
            <ProgressBar striped animated variant="success" now={present} />
            <ProgressBar striped variant="danger" now={absent} animated />
          </ProgressBar>
          <span className=" d-flex gap-2 mt-2">
            <p className=" text-success heading_font_style">{`Persent: ${present}%`}</p>
            <p>|</p>
            <p className=" text-danger heading_font_style">{`Absent: ${absent}%`}</p>
          </span>
        </Col>
      </Row>
      <Row className="  px-2">
        <Table striped bordered hover responsive>
          <thead className=" heading_font_style_heading">
            <tr>
              <th>SI/No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date</th>
              <th>Day</th>
              <th>Present/ Absent</th>
            </tr>
          </thead>
          <tbody className=" heading_font_style">
            <tr >
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>01/01/2024</td>
              <td>Monday</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>Smith</td>
              <td>01/02/2024</td>
              <td>Tuesday</td>
              <td>Absent</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      </div>
    </Container>
  );
};

export default Attendance;
