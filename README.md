
# Cypress Automation Framework

Welcome to the Cypress Automation Framework project! This repository contains a Cypress project that I created while learning and exploring Cypress, an end-to-end testing framework designed for the modern web. This framework aims to provide a solid starting point for automating testing processes, ensuring the quality and reliability of web applications.

## Getting Started

These instructions will guide you through the setup process and get you up and running with your local project setup.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Version 12 or higher recommended)
- npm (comes installed with Node.js)

### Installation

Follow these steps to set up the Cypress Automation Framework on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/LVSoftwareTesting/cypress-automation-framework.git
```

2. Navigate to the project directory:

```bash
cd cypress-automation-framework
```

3. Install the necessary dependencies:

```bash
npm install
```

4. To open the Cypress Test Runner:

```bash
npx cypress open
```

## Running Tests

To run your tests using the Cypress Test Runner, use the following command:

```bash
npx cypress run
```

This command runs all tests headlessly in the Electron browser. For more options and information on running tests in different browsers or configurations, consult the [Cypress documentation](https://docs.cypress.io/guides/guides/command-line).

## Structure

This framework is structured to support various testing needs. Here is an overview of the key directories and files:

- `cypress/integration/` - Contains test files.
- `cypress/fixtures/` - Stores static data used in tests.
- `cypress/plugins/` - Contains plugins for extending Cypress's capabilities.
- `cypress/support/` - Holds reusable code, such as custom commands or overrides.

## Acknowledgments

- Cypress.io for their amazing testing framework.
- The open-source community for continuous inspiration and support.
