import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Dropdown } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { MdNotifications } from "react-icons/md";
import { BiCalendarCheck, BiEdit, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiFillBook } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "./components/css/dashBoard.css";
import Home from "./components/pages/Home";
import StudentAttendanceViewPage from "./components/pages/StudentAttendanceViewPage/StudentAttendanceViewPage";
import Attendance from "./components/pages/Attendance/Attendance";
import StudentAttendance from "./components/pages/StudentAttendance/StudentAttendance";
import Assignment from "./components/pages/Assignment/Assignment";
import HomeWork from "./components/pages/HomeWork/HomeWork";
import ExamTimeTable from "./components/pages/ExamTimeTable/ExamTimeTable";
import MarkCrud from "./components/pages/MarkCrud/MarkCrud";
import Rank from "./components/pages/Rank/Rank";
import SubjectGrade from "./components/pages/Grade/SubjectGrade";
import OverAllGrade from "./components/pages/OverAllGrade/OverAllGrade";
import "./App.css";
import "./components/css/fontcss.css";
import Stationery from "./components/pages/Stationery/Stationery";
import Event from "./components/pages/Event/Event";
import EventAdd from "./components/pages/EventAdd/EventAdd";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [selectedKey, setSelectedKey] = useState(); // Default selected key
  const [value, setValue] = useState(); // Default selected key
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [markMenuOpen, setMarkMenuOpen] = useState(false);
  const [grades, setGrades] = useState(false);
  const [events, setEvents] = useState(false);

  const onItemClick = (key) => {
    setSelectedKey(key);
  };

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMarkMenu = () => {
    setMarkMenuOpen(!markMenuOpen);
  };
  const toggleGradeMenu = () => {
    setGrades(!grades);
  };

  const toggleEvent = () => {
    setEvents(!events);
  };
  const studentMenu = (
    <Menu>
      <Menu.Item
        key="studentAttendance"
        onClick={() => setValue("studentAttendance")}
        className=" heading_font_style"
      >
        <Link to="/studentattendance" style={{ textDecoration: "none" }}>
          <FiEdit2 /> Student Attendance
        </Link>
      </Menu.Item>
      <Menu.Item
        key="viewAttendance"
        onClick={() => setValue("viewAttendance")}
        className=" heading_font_style"
      >
        <Link to="/studentattendanceview" style={{ textDecoration: "none" }}>
          {" "}
          <FiEdit2 /> View Attendance
        </Link>
      </Menu.Item>
      <Menu.Item key="assignment" onClick={() => setValue("assignment")}>
        <Link
          to="/assignment"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Assignment
        </Link>
      </Menu.Item>
      <Menu.Item key="assignment" onClick={() => setValue("assignment")}>
        <Link
          to="/assignmentview"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Assignment View
        </Link>
      </Menu.Item>
      <Menu.Item key="homeWork" onClick={() => setValue("homeWork")}>
        <Link
          to="/homework"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> HomeWork
        </Link>
      </Menu.Item>
      <Menu.Item key="homeWork" onClick={() => setValue("homeWork")}>
        <Link
          to="/homeworkview"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> HomeWork View
        </Link>
      </Menu.Item>
    </Menu>
  );

  const gradeMenu = (
    <Menu>
      <Menu.Item>
        <Link
          to="/allsubjectgrade"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Subject Grade
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/grade"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Overall Grade
        </Link>
      </Menu.Item>
    </Menu>
  );
  const markMenu = (
    <Menu>
      <Menu.Item>
        <Link
          to="/examtimetable"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Exam Timetable
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/mark"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Mark-Add/Update
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/rank"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Rank
        </Link>
      </Menu.Item>
    </Menu>
  );

  const eventMenu = (
    <Menu>
      <Menu.Item>
        <Link
          to="/addevent"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> Add Event
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/viewevent"
          style={{ textDecoration: "none" }}
          className=" heading_font_style"
        >
          <FiEdit2 /> View Event
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Router className="App ">
      <Layout className=" main_layout ">
        <Sider
          style={{ minHeight: "100vh" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
          className="slider_container "
        >
          <div className="demo-logo-vertical" />
          <div className=" text-white d-flex justify-content-center bg-white pt-2">
            {/* <p>
              <b>KST SCHOOL</b>
            </p> */}
            <img src="/LOGO.png" className="p-1" width="350" height="55"></img>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["dashBoard"]}
            selectedKeys={[selectedKey]}
            onClick={({ key }) => onItemClick(key)}
            className="slider_container"
            triggerSubMenuAction="click"
          >
            <Menu.Item key="dashBoard" icon={<UserOutlined />}>
              <Link
                to="/"
                style={{
                  textDecoration: "none"
                }}
                className=" heading_font_style text-white "
              >
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="attendance" icon={<BiCalendarCheck />}>
              <Link
                to="/attendance"
                style={{ textDecoration: "none" }}
                className=" heading_font_style text-white"
              >
                Attendance
              </Link>
            </Menu.Item>
            <Menu.Item
              key="student"
              icon={<FaGraduationCap />}
              className="heading_font_style"
            >
              <div className="d-flex justify-content-start align-items-center heading_font_style mt-3">
                <Dropdown
                  overlay={studentMenu}
                  onVisibleChange={toggleDropdown}
                  visible={isDropdownOpen}
                  className=" heading_font_style text-white"
                >
                  <p
                    className=" heading_font_style"
                    onClick={(e) => e.preventDefault()}
                  >
                    Student
                    {isDropdownOpen ? (
                      <UpOutlined className=" ms-2" />
                    ) : (
                      <DownOutlined className=" ms-2" />
                    )}
                  </p>
                </Dropdown>
              </div>
            </Menu.Item>
            <Menu.Item key="exam" icon={<BiEdit />}>
              <div className="d-flex justify-content-start align-items-center mt-3">
                <Dropdown
                  overlay={markMenu}
                  onVisibleChange={toggleMarkMenu}
                  visible={markMenuOpen}
                >
                  <p
                    className="ant-dropdown-link heading_font_style text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    Exam{" "}
                    {markMenuOpen ? (
                      <UpOutlined className=" ms-2" />
                    ) : (
                      <DownOutlined className=" ms-2" />
                    )}
                  </p>
                </Dropdown>
              </div>
            </Menu.Item>
            <Menu.Item key="grade" icon={<BsGraphUp />}>
              <div className="d-flex justify-content-start align-items-center mt-3">
                <Dropdown
                  overlay={gradeMenu}
                  onVisibleChange={toggleGradeMenu}
                  visible={grades}
                >
                  <p
                    className="ant-dropdown-link heading_font_style text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    Grade{" "}
                    {grades ? (
                      <UpOutlined className=" ms-2" />
                    ) : (
                      <DownOutlined className=" ms-2" />
                    )}
                  </p>
                </Dropdown>
              </div>
            </Menu.Item>
            <Menu.Item key="stationery" icon={<AiFillBook />}>
              <Link
                to="/stationery"
                className=" heading_font_style text-white"
                style={{ textDecoration: "none" }}
              >
                Stationery
              </Link>
            </Menu.Item>
            <Menu.Item key="event" icon={<BiCalendar />}>
              <div className="d-flex justify-content-start align-items-center mt-3">
                <Dropdown
                  overlay={eventMenu}
                  onVisibleChange={toggleEvent}
                  visible={events}
                >
                  <p
                    className="ant-dropdown-link heading_font_style text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    Event{" "}
                    {events ? (
                      <UpOutlined className=" ms-2" />
                    ) : (
                      <DownOutlined className=" ms-2" />
                    )}
                  </p>
                </Dropdown>
              </div>
            </Menu.Item>
            <Menu.Item key="8" icon={<HiOutlineDocumentReport />}>
              <Link
                to="/report"
                className=" heading_font_style text-white"
                style={{ textDecoration: "none" }}
              >
                Report
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className=" content_layout vh-100 position-sticky top-0">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "24px" // Add padding to the right to make space for the logo name
            }}
            className=" head_container"
          >
            <div className=" d-flex justify-content-end w-100 align-items-center gap-2">
              <p className=" m-0">
                <b> Welcome User!</b>
              </p>
              <MdNotifications className=" fs-3 " />
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </Header>
          {/* <hr className=" mx-3" /> */}
          <Content className="entire_bg_color content_container overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route
                path="/studentattendanceview"
                element={<StudentAttendanceViewPage />}
              />
              <Route
                path="/studentattendance"
                element={<StudentAttendance />}
              />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/homework" element={<HomeWork />} />
              <Route path="/examtimetable" element={<ExamTimeTable />} />
              <Route path="/mark" element={<MarkCrud />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/grade" element={<OverAllGrade />} />
              <Route path="/allsubjectgrade" element={<SubjectGrade />} />
              <Route path="/stationery" element={<Stationery />}></Route>
              <Route path="/viewevent" element={<Event />} />
              <Route path="/addevent" element={<EventAdd />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
