import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNodeSurvey from "../components/customNodes/CustomNodeSurvey";
import CustomNodeProcess from "../components/customNodes/CustomNodeProcess";
import CustomNodeDataset from "../components/customNodes/CustomNodeDataset";
import CustomNodeFolder from "../components/customNodes/CustomNodeFolder";
import pipelineData from "../fixtures/pipelineData.json";
import CustomEdge from "../components/CustomEdge";
import ErrorsList from "./ErrorsList";

const nodeTypes = {
  survey: CustomNodeSurvey,
  process: CustomNodeProcess,
  dataset: CustomNodeDataset,
  folder: CustomNodeFolder,
};

const edgeTypes = {
  custom: CustomEdge,
};

const PipelineFlow = () => {
  // Add logic to update nodes with error flags based on error IDs
  const updatedNodes = pipelineData.nodes.map((node) => {
    const hasError = pipelineData.errors.some((err) => err.id === node.id);
    return { ...node, data: { ...node.data, hasError } };
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(updatedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(pipelineData.edges);
  const [selectedError, setSelectedError] = useState(null);

  const onNodeClick = (_, node) => {
    const error = pipelineData.errors.find((err) => err.id === node.id);
    setSelectedError(error ? error.errorMessage : null);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlowProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 500,
            width: 1400,
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ width: "70%" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              fitView
              style={{ background: "#f4f6f9" }}
            >
              <Controls />
              <Background variant="dots" />
            </ReactFlow>
          </div>

          {/* Error List Section */}
          <ErrorsList selectedError={selectedError} />
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default PipelineFlow;
