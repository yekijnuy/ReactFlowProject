import React from "react";
import { Handle } from "reactflow";
import { Icon } from "semantic-ui-react";
import "./CustomNodeProcess.css";

const CustomNodeProcess = ({ data }) => {
  return (
    <div className="custom-node-process">
      <div className="node-icon">
        <Icon name="shuffle" size="large" color="green" />
      </div>
      <div className="node-label">
        <span>{data.label}</span>
      </div>
      {/* Check if there's an error, and show the red exclamation */}
      {data.hasError && (
        <div className="error-icon-process">
          <Icon name="exclamation circle" size="small" color="red" />
        </div>
      )}
      <Handle type="source" position="right" id="a" style={{ top: "50%" }} />
      <Handle type="target" position="left" id="b" style={{ top: "50%" }} />
    </div>
  );
};

export default CustomNodeProcess;
