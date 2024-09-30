import React from "react";
import { Icon, Label } from "semantic-ui-react";
import "./JobSummarySection.css";

const JobSummarySection = ({ jobData }) => {
  return (
    <div className="job-summary-section">
      <div className="summary-grid">
        {/* First row */}
        <span>Pipeline name</span>
        <span>:</span>
        <strong>{jobData.pipelineName}</strong>

        <span>Run by</span>
        <span>:</span>
        <strong>
          <Icon name="hand point up outline" className="pointer-icon" />
          {jobData.runBy}
        </strong>

        <span>Start time</span>
        <span>:</span>
        <strong>{jobData.startTime}</strong>

        {/* Second row */}
        <span>Status</span>
        <span>:</span>
        <div className="pill-status">
          <Label className="pill-label" basic>
            <Icon name="close" />
            {jobData.status}
          </Label>
        </div>

        <span>Storage used</span>
        <span>:</span>
        <strong>{jobData.storageUsed}</strong>

        <span>End time</span>
        <span>:</span>
        <strong>{jobData.endTime}</strong>

        {/* Third row */}
        <span>Duration</span>
        <span>:</span>
        <strong>{jobData.duration}</strong>

        <span>Total rows processed</span>
        <span>:</span>
        <strong>{jobData.totalRowsProcessed}</strong>

        <span>Data interval</span>
        <span>:</span>
        <strong>{jobData.dataInterval}</strong>
      </div>
    </div>
  );
};

export default JobSummarySection;
