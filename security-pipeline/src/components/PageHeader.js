import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PageHeader.css";

const PageHeader = ({ jobData }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRetryClick = () => {
    const retryData = {
      jobId: "1231243",
      retry: true,
      jobDetails: jobData,
    };

    toast.success(`Retrying Job: ${JSON.stringify(retryData, null, 2)}`, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      pauseOnHover: true,
      progress: undefined,
    });
  };

  return (
    <div className="page-header full-width">
      {/* Toast Container to display the toast notifications */}
      <ToastContainer />

      <div className="header-nav">
        <div className="header-left">
          <div className="back-icon-wrapper">
            <Icon name="arrow left" className="back-icon" />
          </div>
          <p className="job-summary-title">
            Survey pipeline &gt; <strong>Job Summary (#1231243)</strong>
          </p>
        </div>
        <Icon name="close" className="close-icon" />
      </div>

      <div className="tabs-and-actions">
        <div className="custom-tabs">
          <span
            className={`tab-item ${activeTab === "Overview" ? "active" : ""}`}
            onClick={() => handleTabClick("Overview")}
          >
            Overview
          </span>
          <span
            className={`tab-item ${activeTab === "Stages" ? "active" : ""}`}
            onClick={() => handleTabClick("Stages")}
          >
            Stages
          </span>
          <span
            className={`tab-item ${activeTab === "Output" ? "active" : ""}`}
            onClick={() => handleTabClick("Output")}
          >
            Output
          </span>
        </div>

        <div className="actions">
          <a href="#" className="download-link">
            <Icon name="download" /> Download all outputs
          </a>
          <Button color="blue" className="retry-btn" onClick={handleRetryClick}>
            Retry Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
