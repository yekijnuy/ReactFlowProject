import { Icon } from "semantic-ui-react";
import "./ErrorsList.css";

const ErrorsList = ({ selectedError }) => {
  return (
    <div style={{ width: "30%", paddingLeft: 20 }}>
      <h3 style={{ display: "flex", alignItems: "center" }}>
        <div className="circle-icon-errors-list">
          <Icon name="close" color="red" size="tiny" />
        </div>
        Errors List
      </h3>

      {selectedError ? (
        <div
          className="error-item"
          style={{
            backgroundColor: "#f3f4f7",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="circular-icon-wrapper">
            <Icon name="database" size="large" color="blue" />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontWeight: "bold" }}>{selectedError}</p>
            <a href="#" style={{ color: "#2185d0" }}>
              Fix now
            </a>
          </div>
        </div>
      ) : (
        <p>No errors</p>
      )}
    </div>
  );
};

export default ErrorsList;
