import React from "react";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import JobSummarySection from "./components/JobSummarySection";
import PipelineFlow from "./components/PipelineFlow";

import jobData from "./fixtures/jobData.json"; // Import the JSON file
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div style={{ paddingTop: "4em" }}>
          <PageHeader jobData={jobData} />
        </div>
        <JobSummarySection jobData={jobData} />

        {/* Add the PipelineFlow component here */}
        <div style={{ padding: "2em 0" }}>
          <PipelineFlow />
        </div>
      </div>
    </>
  );
}

export default App;
