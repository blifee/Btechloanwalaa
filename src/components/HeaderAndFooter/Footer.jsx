import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer id={style["footer-container-style"]} className="py-4">
      <div className="row" id={style["content-style"]}>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-1">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
                fdprocessedid="88gmw"
              />
              <button
                className="btn btn-primary"
                type="button"
                fdprocessedid="p65k4"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id={style["footer-copyright-container"]}
        // className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top"
      >
        <p>
          <b>© 2025 Company, Inc. All rights reserved.</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
