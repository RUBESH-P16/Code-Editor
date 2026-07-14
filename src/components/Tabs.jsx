import "../styles/Tabs.css";

function Tabs({ currentFile }) {
  return (
    <div className="tabs">
      <div className="tab active-tab">
        {currentFile.name}
      </div>
    </div>
  );
}

export default Tabs;