import { Link } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark" id={style["header-container"]}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div id={style["logo-container"]}>
              <Link
                to="#"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </Link>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/loan" className="nav-link px-2 text-white">
                  Loans
                </Link>
              </li>
              <li>
                <Link to="/partner" className="nav-link px-2 text-white">
                  Partner
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="nav-link px-2 text-white">
                  Contact Us
                </Link>
              </li>
              <li></li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
