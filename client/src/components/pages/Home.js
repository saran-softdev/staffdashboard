import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Breadcrumb
} from "react-bootstrap";
import { ImCross, ImTable2 } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { TiTick, TiSortAlphabetically } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Progress } from "antd";
import { MdAssignment, MdChromeReaderMode, MdEventNote } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import "../css/dashBoard.css";
import "../css/fontcss.css";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item active>
          {" "}
          <p className=" heading_font_style p-0 m-0">
             / Dashboard
          </p>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className=" box_shadow_container p-2 ">
      <Row className="justify-content-center align-items-center flex-wrap py-1 heading_font_style_heading ">
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card total_working_days p-3">
            <div className="d-flex justify-content-between">
              <span>
                <h5>24</h5>
                <p>
                  <b>Total working days</b>
                </p>
              </span>
              <span>
                <AiOutlineClockCircle className="fs-1" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card staff_leave p-3">
            <div className="d-flex justify-content-between">
              <span>
                <h5>3</h5>
                <p>
                  <b>Staff Leave</b>
                </p>
              </span>
              <span>
                <ImCross className="fs-3" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card available_take_leave p-3">
            <div className="d-flex justify-content-between">
              <span>
                <h5>1</h5>
                <p>
                  <b> Staff Available To Take Leave</b>
                </p>
              </span>
              <span>
                <TiTick className="fs-1" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card total_stu p-3">
            <div className="d-flex justify-content-between">
              <span>
                <h5>50</h5>
                <p>
                  <b>Total Students of class</b>
                </p>
              </span>
              <span>
                <TiSortAlphabetically className="fs-1" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card std_cls_teacher p-3">
            <div className="d-flex justify-content-between">
              <span>
                <h5>5th</h5>
                <p>
                  {" "}
                  <b>STD Class Teacher</b>
                </p>
              </span>
              <span>
                <GiTeacher className="fs-2" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className=" mb-3">
          <Card className=" dash_card percentage_card p-2">
            <span>
              <p className=" heading_font_style_heading">
                <b>Attendance</b>
              </p>
              <span className=" d-flex justify-content-center gap-2">
                <Progress type="circle" percent={75} size={50} />
                <Progress
                  type="circle"
                  percent={70}
                  status="exception"
                  size={50}
                />
              </span>
            </span>
          </Card>
        </Col>
      </Row>
      <Row className=" px-1 m-0">
        <div className=" d-flex justify-content-center bg-info-subtle align-items-center flex-wrap  dashBoardCard2 p-3 ">
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card "
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/homework.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Home Work</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center mt-1">
              <Card.Img
                variant="top"
                src="/attendance.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Attendance</Card.Text>
            </Card.Body>

            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
            onClick={handleCardClick}
          >
            <div className=" d-flex justify-content-center align-items-center vh-100 mt-3">
              <Card.Img
                variant="top"
                src="/timetable.png"
                className="img-fluid  "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style text-center ">
                Class Timetable
              </Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Class Timetable</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src="https://4.bp.blogspot.com/-_P5py7rEK5c/XKMKPlJEKsI/AAAAAAAAbwM/oGmONYvYwKwpbXlsDy1P8pjIVX77QILFgCLcBGAs/s1600/1B.png"
                alt=""
                srcset=""
                className=" img-fluid"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <div className=" d-flex justify-content-center pt-1 my-1">
                <Card.Img
                  variant="top"
                  src="/staff.png"
                  className="img-fluid mt-2"
                  style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
                />
              </div>

              <Card.Text className="heading_font_style">
                Staff Timetable
              </Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <div className=" d-flex justify-content-center pt-1">
                <Card.Img
                  variant="top"
                  src="/school.png"
                  className="img-fluid mt-2 "
                  style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
                />
              </div>

              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <div className=" d-flex justify-content-center pt-1">
                <Card.Img
                  variant="top"
                  src="/event.png"
                  className="img-fluid mt-2 "
                  style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
                />
              </div>

              <Card.Text className="heading_font_style">
                Events&Circular
              </Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1  rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/examresults.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Exam Result</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
          <Card
            style={{ width: "9rem", height: "9rem" }}
            className="m-2 zoom-card"
          >
            <div className=" d-flex justify-content-center pt-1">
              <Card.Img
                variant="top"
                src="/school.png"
                className="img-fluid mt-2 "
                style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust dimensions as needed
              />
            </div>

            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Text className="heading_font_style">Class Test</Card.Text>
            </Card.Body>
            <div className="bottom_color footer_color p-1 rounded-bottom-5"></div>
          </Card>
        </div>
      </Row>
      </div>
    </Container>
  );
};

export default Home;
