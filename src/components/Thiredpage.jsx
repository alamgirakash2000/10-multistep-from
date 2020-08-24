import React from "react";
import "../App.css";
import { Consumer } from "../Context";
function Thiredpage() {
  return (
    <Consumer>
      {(data) => (
        <div className="form__elements">
          <h2 className="text-center pb-3">Check Your All information:</h2>
          <table className="table">
            <tr>
              <td>
                <h5>First Name</h5>
              </td>
              <td>:</td>
              <td>{data.firstName}</td>
            </tr>
            <tr>
              <td>
                <h5>Last Name</h5>
              </td>
              <td>:</td>
              <td>{data.lastName}</td>
            </tr>
            <tr>
              <td>
                <h5>Email</h5>
              </td>
              <td>:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>
                <h5>Address</h5>
              </td>
              <td>:</td>
              <td>{data.address}</td>
            </tr>
            <tr>
              <td>
                <h5>Hobby</h5>
              </td>
              <td>:</td>
              <td>{data.hobby}</td>
            </tr>
            <tr>
              <td>
                <h5>Bio</h5>
              </td>
              <td>:</td>
              <td>{data.bio}</td>
            </tr>
          </table>
        </div>
      )}
    </Consumer>
  );
}

export default Thiredpage;
