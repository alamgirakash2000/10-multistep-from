import React from "react";
import { Consumer } from "../Context";

function Fourthpage() {
  return (
    <Consumer>
      {(data) => (
        <div className="text-center form__elements">
          <h1>
            Congratulations{" "}
            <span className="text-success">
              {data.firstName + " " + data.lastName}
            </span>{" "}
          </h1>
          <h4>You have successfully submitted the form.</h4>
        </div>
      )}
    </Consumer>
  );
}

export default Fourthpage;
