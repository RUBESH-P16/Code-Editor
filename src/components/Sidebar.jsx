import "../styles/Sidebar.css";

function Sidebar({
  files,
  currentFile,
  setCurrentFile,
  addNewFile,
  deleteFile,
}) {
  return (
    <div className="sidebar">
      <h3>Explorer</h3>

      <button className="new-file-btn" onClick={addNewFile}>
        + New File
      </button>

      {files.map((file) => (
        <div key={file.name} className="file-row">
          <div
            className={
              currentFile.name === file.name
                ? "file active"
                : "file"
            }
            onClick={() => setCurrentFile(file)}
          >
            📄 {file.name}
          </div>

          <button
            className="delete-btn"
            onClick={() => deleteFile(file.name)}
          >
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;