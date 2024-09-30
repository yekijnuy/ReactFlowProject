import React from "react";
import { Handle } from "reactflow";
import { Icon } from "semantic-ui-react";
import "./CustomNodeFolder.css";

const CustomNodeFolder = ({ data }) => {
  return (
    <div className="custom-node-folder">
      <Icon name={data.icon} size="large" color="grey" />
      {/* Check if there's an error, and show the red exclamation */}
      {data.hasError && (
        <div className="error-icon-folder">
          <Icon name="exclamation circle" size="small" color="red" />
        </div>
      )}
      <Handle type="source" position="right" id="a" style={{ top: "50%" }} />
      <Handle type="target" position="left" id="b" style={{ top: "50%" }} />
    </div>
  );
};

export default CustomNodeFolder;
