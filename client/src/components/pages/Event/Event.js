import React from "react";
import { Table, Container, Breadcrumb, Row } from "react-bootstrap";
import "../../css/fontcss.css";
const Event = () => {
  // Sample event data
  const eventData = [
    {
      eventTime: "Football match",
      description: "Morning assembly",
      fromDate: "2024-04-12",
      toDate: "2024-04-12",
      startTime: "08:00 AM",
      endTime: "08:30 AM",
      fromClass: "Class 1",
      toClass: "Class 10",
      image:
        "https://media.istockphoto.com/id/978975308/vector/upcoming-events-neon-signs-vector-upcoming-events-design-template-neon-sign-light-banner-neon.jpg?s=612x612&w=0&k=20&c=VMCoJJda9L17HVkFOFB3fyDpjC4Qu2AsyYn3u4T4F4c="
    },
    {
      eventTime: "cricket match",
      description: "Sports activities",
      fromDate: "2024-04-12",
      toDate: "2024-04-12",
      startTime: "01:00 PM",
      endTime: "03:00 PM",
      fromClass: "Class 3",
      toClass: "Class 7",
      image:
        "https://t3.ftcdn.net/jpg/04/28/40/40/360_F_428404007_dlbIe8jNte0Td6fzJ5NIVoLGcAP0drQ6.jpg"
    }
  ];

  return (
    <Container>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Event</Breadcrumb.Item>

        <Breadcrumb.Item active>EventView</Breadcrumb.Item>
      </Breadcrumb>
      {/* <h3 className=" text-center mt-3">Event View</h3> */}

      <Row className=" px-2 ">
      <div className=" box_shadow_container">
        <Table striped bordered hover responsive>
          <thead className=" heading_font_style_heading">
            <tr>
              <th>Event</th>
              <th>Description</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>From Class</th>
              <th>To Class</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody className="heading_font_style">
            {eventData.map((event, index) => (
              <tr key={index}>
                <td>{event.eventTime}</td>
                <td>{event.description}</td>
                <td>{event.fromDate}</td>
                <td>{event.toDate}</td>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.fromClass}</td>
                <td>{event.toClass}</td>
                <td>
                  <img
                    src={event.image}
                    alt={`Event ${index}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Event;
