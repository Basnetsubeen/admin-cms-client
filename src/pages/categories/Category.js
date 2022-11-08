import React from "react";
import AddCategoryForm from "../../components/category-table/AddCategoryForm";
import CategoryTable from "../../components/category-table/CategoryTable";
import AdminLayout from "../../components/layout/AdminLayout";

const Category = () => {
  return (
    <AdminLayout>
      <h2 className="py-3">Categories table</h2>
      {/* form */}
      <AddCategoryForm />
      {/* table */}
      <CategoryTable />
    </AdminLayout>
  );
};

export default Category;
