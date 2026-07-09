# Code Editor

## Overview

Code Editor is a web-based application that provides a simple and efficient environment for creating, editing, managing, and downloading code files directly from the browser.

The project is inspired by modern code editors such as Visual Studio Code and focuses on providing essential coding features with a clean and user-friendly interface.

This project is developed as a full-stack application and is being expanded with more advanced features.

---

## Features

### File Management

* Create new files
* Display files in an Explorer sidebar
* Open and edit files
* Delete files
* Switch between different files
* Manage file contents dynamically

### Code Editing

* Edit code directly in the browser
* Real-time content updates
* Support for multiple file types
* Dark-themed editing interface
* Download edited files to the local system

### User Interface

* VS Code inspired layout
* Explorer sidebar
* File tabs
* Editor workspace
* Simple and responsive design

---

## Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Tools

* Visual Studio Code
* Node.js
* npm
* Git
* GitHub

---

## Project Structure

```
code-editor/

│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Tabs.jsx
│   │   └── Editor.jsx
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── Editor.css
│   │   ├── Sidebar.css
│   │   └── Tabs.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd code-editor
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173/
```

---

## Application Workflow

1. User opens the Code Editor application.
2. The Explorer displays available files.
3. Users can create new files.
4. Users can select files from the Explorer.
5. The selected file content appears in the editor.
6. Users can modify the code.
7. Changes are updated automatically.
8. Users can download the edited file.

---

## Current Development Status

The project currently includes the core functionality of a lightweight code editor:

* File explorer
* File creation
* File deletion
* File editing
* File switching
* File downloading

The project is currently under active development with additional features planned.

---

## Future Enhancements

* Advanced syntax highlighting
* Multiple open tabs
* File renaming
* Search functionality
* Code execution support
* User authentication
* Backend integration
* Database storage
* Cloud-based file saving
* Real-time collaboration
* AI-powered coding assistance

---

## Purpose

The main goal of this project is to understand and implement the core concepts behind modern code editors while improving skills in frontend development, application architecture, and software engineering practices.

---

## Author

**Rubesh Prakash**

---

## License

This project is developed for educational and development purposes.
