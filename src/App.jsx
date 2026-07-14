import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import CodeEditor from "./components/Editor";
import "./styles/App.css";

function App() {
  const [files, setFiles] = useState([
    {
      name: "index.html",
      content: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>

</body>
</html>`,
    },
    {
      name: "style.css",
      content: `body {
    margin: 0;
    padding: 0;
}`,
    },
    {
      name: "script.js",
      content: `console.log("Hello World");`,
    },
  ]);

  const [currentFile, setCurrentFile] = useState(files[0]);

  // Create new file
  function addNewFile() {
    const fileName = prompt("Enter file name:");

    if (!fileName) return;

    const newFile = {
      name: fileName,
      content: "",
    };

    setFiles([...files, newFile]);
    setCurrentFile(newFile);
  }

  // Delete file
  function deleteFile(fileName) {
    const updatedFiles = files.filter(
      (file) => file.name !== fileName
    );

    setFiles(updatedFiles);

    if (updatedFiles.length > 0) {
      setCurrentFile(updatedFiles[0]);
    }
  }

  return (
    <>
      <Navbar />

      <div className="main-container">
        <Sidebar
          files={files}
          currentFile={currentFile}
          setCurrentFile={setCurrentFile}
          addNewFile={addNewFile}
          deleteFile={deleteFile}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Tabs currentFile={currentFile} />

          <CodeEditor
            currentFile={currentFile}
            files={files}
            setFiles={setFiles}
          />
        </div>
      </div>
    </>
  );
}

export default App;