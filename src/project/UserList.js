import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddEditUser from "./AddEditUser";
import axios from "axios";
import "./table.css";
const UserList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const column = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
  ];

  const loadUser = () => {
    axios
      .get("http://localhost:8888/users")
      .then((responce) => {
        if (responce.data) setData(responce.data);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    loadUser();
  });

  const handleFilter = (e) => {
    const { name, value } = e.target;
    const arr = data.filter((u, i) =>
      new RegExp(value, "gi").test([
        u.last_name,
        u.id,
        u.email,
        u.first_name,
        u.gender,
      ])
    );
    setFilteredData(arr);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        <h3>Candidates</h3>
        <input
          placeholder="whom are you looking for?"
          onChange={handleFilter}
          style={{ width: "400px" }}
        />
      </div>

      <DataGrid
        style={{ height: "50vh" }}
        rows={filteredData}
        columns={column}
      />

      <AddEditUser loadUser={loadUser} />
    </>
  );
};

export default UserList;
