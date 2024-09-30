# Pipeline Flow Visualization App

This application is designed to visualize data pipelines using custom nodes and edges in a React-based environment. It allows for dynamic interactions between pipeline stages, displays errors when they occur, and provides a responsive UI.

## Table of Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Updating pipelineData.json](#updating-pipelinedatajson)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Pipeline Flow Visualization app, follow the steps below.

1. Clone the Repository:

```bash
git clone https://github.com/your-username/pipeline-visualization.git
cd pipeline-visualization
```

2. Install Dependencies: Ensure you have Node.js installed, then install the necessary dependencies by running:

```bash
npm install
```

3. Start the Application: After installing dependencies, run the following command to start the app:

```bash
npm start
```

The app should now be available at http://localhost:3000/ in your browser.

## Dependencies

This project relies on the following main dependencies:

- React: The front-end library used to build the user interface.
- ReactFlow: This is the key library used to visualize pipelines, define custom nodes and edges.
- Semantic UI React: Provides pre-built components and styling for the UI.
- Jest: Used for running unit tests.
- React Testing Library: Helps to test React components in a user-centric way.

For a full list of dependencies, check the `package.json` file.

## Running the App

Once the app is up and running, the UI will show a visual representation of a data pipeline. Here's what you can do:

- View pipeline flow: The main interface displays various nodes connected by edges, which represent data flow through different stages.
- Handle errors: If an error occurs in any of the stages, you will see an error icon, and an error list will display the details. You can click "Fix now" to navigate to the affected stage.
- Interactive nodes: Clicking on nodes allows you to visualize specific details about that node, including the rules applied and its state.

## Testing

This project uses Jest and React Testing Library for unit tests. You can run the tests by using the following command:

```bash
npm test
```

Tests are located in the `__tests__` directory and cover both React component rendering and interaction functionality.

## Updating pipelineData.json

The pipeline structure (nodes, edges, and errors) is stored in `pipelineData.json`. Here's how you can update it:

1. Locate the file: The `pipelineData.json` file is located in the `src/fixtures/` directory. It contains all the pipeline data that feeds into the ReactFlow visualization.

2. Understanding the structure: The JSON structure consists of three key parts:
   - `nodes`: This contains the individual stages of the pipeline.
   - `edges`: These define the connections between the stages.
   - `errors`: This part lists any errors that occurred during the pipeline execution.

Example:

```json
{
  "nodes": [
    { "id": "1", "type": "survey", "position": { "x": 0, "y": 50 }, "data": { "label": "Survey_2015\n10 rules applied" }},
    ...
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2", "type": "smoothstep" },
    ...
  ],
  "errors": [
    { "id": "3-output", "errorMessage": "Export of 'Joineddataset' to Amazon RDS failed. Column data type mismatch." }
  ]
}
```

3. Adding a Node: To add a new node, append an object to the `nodes` array. Make sure to define its `id`, `type`, `position`, and `data`.

```json
{
  "id": "10",
  "type": "dataset",
  "position": { "x": 400, "y": 300 },
  "data": { "label": "NewDataset\n5 rules applied" }
}
```

4. Connecting Nodes: Use the `edges` array to connect nodes. Ensure each edge has a `source`, `target`, and `type`.

```json
{ "id": "e9-10", "source": "9", "target": "10", "type": "smoothstep" }
```

5. Handling Errors: Add any errors to the `errors` array. Reference the node's ID and provide an error message.

```json
{ "id": "10", "errorMessage": "Column data type mismatch on NewDataset" }
```

6. Save and Refresh: After making changes to the `pipelineData.json`, save the file, and the app will automatically refresh with the new data.

## Features

- Custom Node Types: Survey, process, dataset, and folder nodes allow you to visually differentiate stages.
- Error Handling: Clickable nodes display error messages and allow you to fix issues.
- Responsive Design: The app resizes nodes and edges to fit the screen dynamically.
- Configurable Pipeline: Modify the `pipelineData.json` to customize the pipeline flow.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit the changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

