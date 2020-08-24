import React from "react";
import "../App.css";
import { Consumer } from "../Context";
import { TextField } from "@material-ui/core";
function Firstpage() {
  return (
    <Consumer>
      {(data) => (
        <div className="d-flex flex-column form__elements">
          <h2 className="text-center pb-3">This is First Page</h2>
          <TextField
            id="outlined-required"
            label="First Name"
            defaultValue={data.firstName}
            variant="outlined"
            className="mb-3"
            onChange={(e) => {
              data.setFirstName(e.target.value);
            }}
          />

          <TextField
            id="outlined-required"
            label="Last Name"
            defaultValue={data.lastName}
            variant="outlined"
            className="mb-3"
            onChange={(e) => {
              data.setLastName(e.target.value);
            }}
          />

          <TextField
            id="outlined-required"
            label="Email"
            defaultValue={data.email}
            variant="outlined"
            type="email"
            className="mb-3"
            onChange={(e) => {
              data.setEmail(e.target.value);
            }}
          />
        </div>
      )}
    </Consumer>
  );
}

export default Firstpage;
