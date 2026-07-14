import { useEffect, useState } from "react";
import "../styles/Editor.css";

function CodeEditor({ currentFile, files, setFiles }) {
  const [code, setCode] = useState(currentFile.content);

  useEffect(() => {
    setCode(currentFile.content);
  }, [currentFile]);

  function handleChange(e) {
    const newCode = e.target.value;

    setCode(newCode);

    const updatedFiles = files.map((file) =>
      file.name === currentFile.name
        ? { ...file, content: newCode }
        : file
    );

    setFiles(updatedFiles);
  }


  function downloadFile() {
    const blob = new Blob([code], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = currentFile.name;

    link.click();

    URL.revokeObjectURL(url);
  }


  return (
    <div className="editor-wrapper">

      <button
        className="download-btn"
        onClick={downloadFile}
      >
        ⬇️ Download
      </button>

      <div className="editor-container">
        <textarea
          className="code-editor"
          value={code}
          onChange={handleChange}
          spellCheck={false}
        />
      </div>

    </div>
  );
}

export default CodeEditor;