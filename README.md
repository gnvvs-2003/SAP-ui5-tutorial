# SAP UI5 Walkthrough Tutorial


A comprehensive SAP UI5 application based on the official walkthrough tutorial. This project demonstrates the core concepts of UI5 development, including Component-based architecture, OData integration, and mock data handling.

## 🚀 Features

- **Modern Architecture**: Built with `Component.js` and `manifest.json`.
- **OData Integration**: Consumes the Northwind OData service.
- **Mock Server**: Includes a local mock server for development without a backend.
- **Internationalization (i18n)**: Supports multiple languages and locales.
- **Responsive Design**: Optimized for Desktop, Tablet, and Phone.
- **Custom Formatting**: Utilizes custom formatters for data display.

## 🛠️ Tech Stack

- **Framework**: SAP UI5
- **Tooling**: UI5 CLI
- **Language**: JavaScript / XML Views
- **Service**: Northwind OData V2

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [UI5 CLI](https://sap.github.io/ui5-tooling/) (`npm install --global @ui5/cli`)

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sap-ui5-tutorial.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sap-ui5-tutorial
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the App

### Start with Mock Server (Development)
To run the app with local mock data (useful for development when the backend is unavailable):
```bash
npm run run-mockserver
```
Navigate to: `http://localhost:8080/test/mockServer.html`

### Start with Remote Service
To run the app and connect to the actual Northwind service:
```bash
npm start
```
Navigate to: `http://localhost:8080/index.html`

## 📂 Project Structure

```text
├── webapp/
│   ├── controller/      # UI Controllers
│   ├── view/            # XML Views
│   ├── model/           # Data Models & Formatters
│   ├── i18n/            # Translation Files
│   ├── localService/    # Mock Server & Metadata
│   ├── test/            # Test Initializers
│   ├── css/             # Custom Styles
│   ├── Component.js     # App Component Descriptor
│   ├── manifest.json    # App Configuration
│   └── index.html       # Entry Point
├── ui5.yaml             # UI5 Tooling Configuration
└── package.json         # Dependencies & Scripts
```

## 📖 Key Components

- **`Component.js`**: The root component that initializes the app and models.
- **`manifest.json`**: The central configuration file for routing, models, and dependencies.
- **`InvoiceList.view.xml`**: Displays a list of invoices with search and filtering capabilities.
- **`formatter.js`**: Custom logic for styling status text based on invoice data.

