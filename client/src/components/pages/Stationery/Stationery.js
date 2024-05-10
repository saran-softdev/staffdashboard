import React, { useState } from "react";
import { Table, Form, Container, Breadcrumb, Row } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { AiFillSave } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import "../../css/fontcss.css";

const Stationery = () => {
  // Sample data array with multiple subject totals for each person
  const [data, setData] = useState([
    {
      id: 1,
      studentName: "John Doe",
      gender: "Male",
      products: [
        { id: 1, subject: "Id_Card", total: 10, issue: 8 },
        { id: 2, subject: "Books", total: 9, issue: 8 },
        { id: 3, subject: "Note", total: 8, issue: 8 },
        { id: 4, subject: "bag", total: 8, issue: 8 },
        { id: 5, subject: "shoe", total: 8, issue: 8 }
      ]
    },
    {
      id: 2,
      studentName: "Jane Smith",
      gender: "Female",
      products: [
        { id: 6, subject: "Id_Card", total: 4, issue: 2 },
        { id: 7, subject: "Books", total: 4, issue: 1 },
        { id: 8, subject: "Note", total: 7, issue: 3 },
        { id: 9, subject: "bag", total: 8, issue: 4 },
        { id: 10, subject: "shoe", total: 7, issue: 2 }
      ]
    }
  ]);

  const [editedIndex, setEditedIndex] = useState(null);
  const [editedProductIndex, setEditedProductIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleEdit = (index, productIndex, value) => {
    setEditedIndex(index);
    setEditedProductIndex(productIndex);
    setEditedValue(value);
  };

  const handleSave = () => {
    const newData = data.map((student, i) => {
      if (i === editedIndex) {
        return {
          ...student,
          products: student.products.map((product, j) => {
            if (j === editedProductIndex) {
              return { ...product, issue: editedValue };
            }
            return product;
          })
        };
      }
      return student;
    });
    setData(newData);
    setEditedIndex(null);
    setEditedProductIndex(null);
    setEditedValue("");
  };

  const handleCancel = () => {
    setEditedIndex(null);
    setEditedProductIndex(null);
    setEditedValue("");
  };

  return (
    <Container>
      <Breadcrumb className=" heading_font_style">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Stationery</Breadcrumb.Item>

        <Breadcrumb.Item active>StationeryProduct</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="px-2">
      <span className=" my-1">
        {/* <h3 className="text-center my-3">Stationery Products</h3> */}
        <h5 className="text-center heading_font_style_heading">10th std</h5>
      </span>
        <div className=" box_shadow_container">
          <Table striped bordered hover responsive>
            <thead>
              <tr className=" heading_font_style_heading">
                <th>Student Name</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Total</th>
                <th>Issue</th>
                <th>Pending</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="heading_font_style">
              {data.map((student, index) => (
                <React.Fragment key={index}>
                  {student.products.map((product, productIndex) => (
                    <tr key={product.id}>
                      {productIndex === 0 && (
                        <React.Fragment>
                          <td rowSpan={student.products.length}>
                            {student.studentName}
                          </td>
                          <td rowSpan={student.products.length}>
                            {student.gender}
                          </td>
                        </React.Fragment>
                      )}
                      <td>{product.subject}</td>
                      <td>{product.total}</td>
                      <td>
                        {editedIndex === index &&
                        editedProductIndex === productIndex ? (
                          <Form.Control
                            type="text"
                            value={editedValue}
                            onChange={(e) => setEditedValue(e.target.value)}
                          />
                        ) : (
                          <span>{product.issue}</span>
                        )}
                      </td>
                      <td>{product.total - product.issue}</td>
                      <td>
                        {editedIndex === index &&
                        editedProductIndex === productIndex ? (
                          <React.Fragment>
                            {
                              <AiFillSave
                                onClick={handleSave}
                                style={{ cursor: "pointer" }}
                                className="fs-5"
                              />
                            }
                            {
                              <MdCancel
                                onClick={handleCancel}
                                style={{ cursor: "pointer" }}
                                className="fs-5"
                              />
                            }
                          </React.Fragment>
                        ) : (
                          <FiEdit
                            onClick={() =>
                              handleEdit(index, productIndex, product.issue)
                            }
                            className="fs-5"
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Stationery;
