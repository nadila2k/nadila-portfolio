import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Table from "../components/Table";

export default function AdminProfile() {
  return (
    <DashboardLayout header="Admin Profile">
      <h1>Admin Profile</h1>
      <Table
        columns={[
          { id: "name", label: "Name" },
          { id: "age", label: "Age" },
          { id: "city", label: "City" },
        ]}
        data={[
          { id: 1, name: "Alice", age: 30, city: "New York" },
          { id: 2, name: "Bob", age: 25, city: "San Francisco" },
          { id: 3, name: "Charlie", age: 35, city: "Los Angeles" },
        ]}
      />
    </DashboardLayout>
  );
}
