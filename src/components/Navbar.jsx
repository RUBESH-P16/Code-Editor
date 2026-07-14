import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>⚡ Code Editor</h2>
      </div>

      <nav className="menu">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Run</span>
        <span>Help</span>
      </nav>
    </header>
  );
}

export default Navbar;