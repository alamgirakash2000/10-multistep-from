import React from "react";
import "../App.css";
import { Consumer } from "../Context";
import { TextField } from "@material-ui/core";
function Secondpage() {
  return (
    <Consumer>
      {(data) => (
        <div className="d-flex flex-column form__elements">
          <h2 className="text-center pb-3">This is Second Page</h2>
          <TextField
            id="outlined-required"
            label="Address"
            defaultValue={data.address}
            variant="outlined"
            className="mb-3"
            onChange={(e) => {
              data.setAddress(e.target.value);
            }}
          />

          <TextField
            id="outlined-required"
            label="Hobby"
            defaultValue={data.hobby}
            variant="outlined"
            className="mb-3"
            onChange={(e) => {
              data.setHobby(e.target.value);
            }}
          />

          <TextField
            id="outlined-required"
            label="Bio"
            defaultValue={data.bio}
            variant="outlined"
            type="email"
            className="mb-3"
            onChange={(e) => {
              data.setBio(e.target.value);
            }}
          />
        </div>
      )}
    </Consumer>
  );
}

export default Secondpage;
