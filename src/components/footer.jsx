import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <b>Inspire world</b>
            </h5>

            <p className="p-0 m-0">
              This website is created by Inspire World and provides complete
              information about all the different countries in the world.
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>

      <div className="text-center text-light pt-3  bg-dark">
        Designed & Built by{" "}
        <a className="text-light" href="https://github.com/guptaashwanee">
          Ashwanee Gupta
          <br />
          Show <i className="fa fa-heart red-text"></i> and support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
