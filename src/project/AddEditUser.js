import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const AddEditUser = ({ loadUser }) => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:8888/users", user);
    loadUser();
  };
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h3>Add New Candidate</h3>
        <Grid container spacing={1}>
          <Grid item xs={6} sx={{ display: "flex" }}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: "id" }}>
            <TextField
              fullWidth
              variant="outlined"
              label="ID"
              name="id"
              value={user.id}
              onChange={handleChange}
            />
          </Grid>

          <div
            style={{ display: "flex", marginLeft: "20px", marginTop: "20px" }}
          >
            <Grid item xs={6}>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ marginLeft: "50px" }}
              >
                Add
              </Button>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default AddEditUser;
