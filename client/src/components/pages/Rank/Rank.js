import React from "react";
import { Table, Row, Container, Breadcrumb, Col } from "react-bootstrap";
import "../../css/fontcss.css";

const Rank = () => {
  return (
    <Container>
      <Row className="">
        <Breadcrumb className="heading_font_style">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Exam</Breadcrumb.Item>
          <Breadcrumb.Item active>Rank</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      {/* <h3 className="text-center my-3">Rank</h3> */}
      <Row className="px-2 d-flex justify-content-center">
        <div className="box_shadow_container">
          <Table striped bordered hover responsive className="w-100">
            <thead className="heading_font_style_heading">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody className="heading_font_style">
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Rank;
