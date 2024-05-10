import React from "react";
import { Table, Container, Breadcrumb, Row } from "react-bootstrap";
import "../../css/fontcss.css";
const SubjectGrade = () => {
  // Sample data array with multiple subject grades for each person
  const sampleData = [
    {
      studentName: "John Doe",
      gender: "Male",
      subjectGrades: [
        { subject: "Tamil", grade: "A+", mark: 8 },
        { subject: "English", grade: "B", mark: 8 },
        { subject: "Maths", grade: "D", mark: 8 },
        { subject: "Science", grade: "B", mark: 8 },
        { subject: "Social", grade: "B", mark: 8 }
      ]
    },
    {
      studentName: "Jane Smith",
      gender: "Female",
      subjectGrades: [
        { subject: "Tamil", grade: "A", mark: 8 },
        { subject: "English", grade: "A-", mark: 8 },
        { subject: "Maths", grade: "B+", mark: 8 },
        { subject: "Science", grade: "C", mark: 8 },
        { subject: "Social", grade: "B", mark: 8 }
      ]
    },
    {
      studentName: "Alice Johnson",
      gender: "Female",
      subjectGrades: [
        { subject: "Tamil", grade: "B", mark: 7 },
        { subject: "English", grade: "B-", mark: 6 },
        { subject: "Maths", grade: "C", mark: 5 },
        { subject: "Science", grade: "C+", mark: 6 },
        { subject: "Social", grade: "A", mark: 9 }
      ]
    },
    // Additional sample data with different mark values
    {
      studentName: "Bob Smith",
      gender: "Male",
      subjectGrades: [
        { subject: "Tamil", grade: "A", mark: 9 },
        { subject: "English", grade: "B+", mark: 7 },
        { subject: "Maths", grade: "C-", mark: 6 },
        { subject: "Science", grade: "B", mark: 8 },
        { subject: "Social", grade: "A-", mark: 8 }
      ]
    },
    {
      studentName: "Emma Johnson",
      gender: "Female",
      subjectGrades: [
        { subject: "Tamil", grade: "B+", mark: 7 },
        { subject: "English", grade: "A", mark: 9 },
        { subject: "Maths", grade: "B", mark: 8 },
        { subject: "Science", grade: "A-", mark: 8 },
        { subject: "Social", grade: "C+", mark: 6 }
      ]
    }
  ];

  return (
    <Container>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Grade</Breadcrumb.Item>
        <Breadcrumb.Item active>AllSubjectGrade</Breadcrumb.Item>
      </Breadcrumb>
      {/* <h3 className=" text-center my-3">All Subject Grade</h3> */}
      <Row className=" px-2">
      <div  className=" box_shadow_container ">
        {sampleData.map((data, index) => (
          <div className=" p-0 m-0  ">
            <Table key={index} striped bordered hover responsive>
              <thead className=" heading_font_style_heading">
                <tr>
                  <th>Student Name</th>
                  <th>Gender</th>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody className=" heading_font_style">
                <tr>
                  <td rowSpan={data.subjectGrades.length + 1}>
                    {data.studentName}
                  </td>
                  <td rowSpan={data.subjectGrades.length + 1}>{data.gender}</td>
                </tr>
                {data.subjectGrades.map((subjectGrade, index) => (
                  <tr key={index}>
                    <td>{subjectGrade.subject}</td>
                    <td>{subjectGrade.grade}</td>
                    <td>{subjectGrade.mark}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
        </div>
      </Row>
    </Container>
  );
};

export default SubjectGrade;
