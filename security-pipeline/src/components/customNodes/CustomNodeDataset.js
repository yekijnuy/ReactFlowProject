import React from "react";
import { Handle } from "reactflow";
import { Icon } from "semantic-ui-react";
import "./CustomNodeDataset.css";

const CustomNodeDataset = ({ data }) => {
  return (
    <div className="custom-node-dataset">
      <div className="icon-wrapper-dataset">
        <Icon
          name="white clone"
          size="large"
          className="node-icon-dataset"
          color="white"
        />
      </div>
      <div className="node-label-dataset">
        {data.label.split("\n")[0]}
        <div className="sub-label-dataset">{data.label.split("\n")[1]}</div>
      </div>
      {/* Check if there's an error, and show the red exclamation */}
      {data.hasError && (
        <div className="error-icon-dataset">
          <Icon name="exclamation circle" size="small" color="red" />
        </div>
      )}
      <Handle type="source" position="right" id="a" style={{ top: "50%" }} />
      <Handle type="target" position="left" id="b" style={{ top: "50%" }} />
    </div>
  );
};

export default CustomNodeDataset;
