# React Drag-and-Drop File Uploader

This project is a simple React-based application for uploading and removing files using a drag-and-drop interface. It also supports the deletion of files by dragging them into a "remove" area.

## Table of Contents
- [Author - Ушаков Игорь](https://github.com/IgorUshakov05)

## Features

- **Drag-and-drop support**: Easily upload files by dragging them into the upload area.
- **File list management**: View uploaded files in a list format.
- **File removal**: Remove files by clicking on them or dragging them to the designated remove area.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/IgorUshakov05/drag-and-drop.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd react-drag-and-drop-file-uploader
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Start the development server**:

    ```bash
    npm start
    ```

2. **Open your browser**:

    Go to `http://localhost:3000` to see the application in action.

3. **Drag and drop files**:

    - Drag files from your file explorer and drop them into the designated upload area.
    - View the files in the list.
    - Remove files by either clicking on them or dragging them into the remove area.

## Project Structure

```plaintext
├── src
│   ├── assets
│   │   └── img
│   │       ├── upload.png   # Upload icon
│   │       └── remove.png   # Remove icon
│   ├── App.tsx              # Main React component
│   ├── App.css              # Styling for the app
│   └── index.tsx            # Entry point for React
├── public
│   └── index.html           # Main HTML file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
