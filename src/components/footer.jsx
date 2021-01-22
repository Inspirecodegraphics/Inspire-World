import React from "react";

const Footer = () => {
  return (
    <footer class="bg-light text-center text-lg-start footer">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-12 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">
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

      <div class="text-center text-light pt-3  bg-dark">
        Designed & Built by{" "}
        <a class="text-light" href="https://github.com/guptaashwanee">
          Ashwanee Gupta
          <br />
          Show <i class="fa fa-heart red-text"></i> and support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
