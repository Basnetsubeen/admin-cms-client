import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/categoryAction";

const AddCategoryForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategoriesAction(form));
  };
  return (
    <div>
      <Form
        className="py-4 mb-5 border p-3 shadow rounded"
        onSubmit={handleOnSubmit}
      >
        <h4 className="mb-3">Add New Category</h4>
        <Row className="g-2">
          <Col md="2">
            <Form.Group>
              <Form.Check
                name="status"
                label="status"
                type="switch"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Select name="parentId" onChange={handleOnChange}>
                <option value="">Select Parent Category</option>
                {categories.length > 0 &&
                  categories.map(
                    (item) =>
                      !item.parentId && (
                        <option value={item._id}>{item.name}</option>
                      )
                  )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Category Name"
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">
              Add Category
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCategoryForm;
