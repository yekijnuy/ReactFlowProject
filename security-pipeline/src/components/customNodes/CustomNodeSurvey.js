import React from "react";
import { Handle } from "reactflow";
import { Icon } from "semantic-ui-react";
import "./CustomNodeSurvey.css";

const CustomNodeSurvey = ({ data }) => {
  return (
    <div className="custom-node-survey">
      <div className="icon-wrapper-survey">
        <Icon name="server" size="large" className="node-icon" color="blue" />
      </div>
      <div className="node-label-survey">
        {data.label.split("\n")[0]}
        <div className="sub-label-survey">{data.label.split("\n")[1]}</div>
      </div>
      {/* Check if there's an error, and show the red exclamation */}
      {data.hasError && (
        <div className="error-icon-survey">
          <Icon name="exclamation circle" size="small" color="red" />
        </div>
      )}
      <Handle type="source" position="right" id="a" style={{ top: "50%" }} />
      <Handle type="target" position="left" id="b" style={{ top: "50%" }} />
    </div>
  );
};

export default CustomNodeSurvey;
