import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/categoryAction";

const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const parentCategory = categories.filter(({ parentId }) => !parentId);
  const childCategory = categories.filter(({ parentId }) => parentId);
  return (
    <div>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentCategory.length > 0 &&
            parentCategory.map((item) => (
              <>
                <tr key={item._id} className="bg-info">
                  <td
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "chidren" : "Parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                    {"  "}
                    <Button variant="warning">Edit</Button>
                  </td>
                </tr>
                {childCategory.map(
                  (child) =>
                    child.parentId === item._id && (
                      <tr key={child._id}>
                        <td
                          className={
                            child.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {child.status}
                        </td>
                        <td>{child.name}</td>
                        <td>{child.parentId ? "chidren" : "Parent"}</td>
                        <td>
                          <Button variant="danger">Delete</Button>
                          {"  "}
                          <Button variant="warning">Edit</Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryTable;
