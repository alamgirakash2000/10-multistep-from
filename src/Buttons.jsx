import React from "react";
import { Consumer } from "./Context";
import "./App.css";

function Buttons() {
  return (
    <div>
      <Consumer>
        {(data) => (
          <div>
            <div className={`buttons ${data.page >= 3 && "d-none"}`}>
              <button
                disabled={data.page === 4}
                className="btn btn-primary"
                onClick={() => {
                  data.setPage(data.page + 1);
                }}
              >
                Next
              </button>
              <button
                className="btn btn-secondary"
                disabled={data.page === 1}
                onClick={() => {
                  data.setPage(data.page - 1);
                }}
              >
                Back
              </button>
            </div>
            <div className={`buttons ${data.page !== 3 && "d-none"}`}>
              <button
                disabled={data.page === 4}
                className="btn btn-success"
                onClick={() => {
                  data.setPage(data.page + 1);
                }}
              >
                Confirm Submission
              </button>
              <button
                className="btn btn-secondary"
                disabled={data.page === 1}
                onClick={() => {
                  data.setPage(data.page - 1);
                }}
              >
                Check Again
              </button>
            </div>
            <div className={`buttons ${data.page !== 4 && "d-none"}`}>
              <button
                className="btn btn-secondary"
                disabled={data.page === 1}
                onClick={() => {
                  data.setPage(data.page - 1);
                }}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </Consumer>
    </div>
  );
}

export default Buttons;
