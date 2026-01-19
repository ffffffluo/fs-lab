import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Pixell River Logo" className="logo" />
        <div className="title-group">
          <h1>Pixell River Employee Directory</h1>
          <p>Manage and view our organizational structure.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
