import { ReactComponent as GitHubIcon } from "assets/img/githubIcon.svg";
import { Link } from "react-router-dom";
import "./styles.css"

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to="/">
            <h1>DSMovie</h1>
          </Link>

          <a href="https://github.com/aslayclevisson">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/AslayC</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
