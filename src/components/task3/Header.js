import React from "react";
import logo from "./images/logo.png";
export default function Header() {
  return (
    <>
      {/* nav1 */}
      <nav className="navbar navbar-expand-lg dar  ">
        <div className="container text-white">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu1"
          >
            <span className="navbar-toggler-icon bgcolor"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu1">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item">
                <a href="#Help" className="nav-link gcolor h2">
                  Language:
                </a>
              </li>
              <li className="nav-item">
                <a href="#Privacy" className="nav-link text-white  h2">
                  English
                </a>
              </li>

              <h2 className="mx-2"> | </h2>

              <li className="nav-item">
                <a href="#Contact" className="nav-link gcolor  h2">
                  Phone:
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link text-white  h2">
                  +345353534535
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex flex-row ">
              <li className="nav-item">
                <a href="#Link" className="nav-link text-white me-2">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link text-white me-2">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link text-white me-2">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link text-white me-2">
                  <i class="fa-brands fa-skype"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link text-white me-2">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav2 */}

      <nav class="navbar navbar-expand-lg  bg-light">
        <div class="container">
          <a class="navbar-brand" href="#!">
            <img src={logo} alt="" width="121" height="43" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon bgcolor"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto d-flex flex-row justify-content-between">
              <li class="nav-item text-center ">
                <i class="fas fa-home "></i>
                <a class="nav-link " aria-current="page" href="#!">
                  HOME
                </a>
              </li>
              <li class="nav-item text-center  ">
                <i class="fa-solid fa-tag "></i>
                <a class="nav-link" href="#!">
                  ABOUT
                </a>
              </li>
              <li class="nav-item text-center  ">
                <i class="fa-solid fa-user "></i>
                <a class="nav-link" href="#!">
                  PORTFOLIO
                </a>
              </li>
              <li class="nav-item text-center  ">
                <i class="fa-brands fa-servicestack "></i>
                <a class="nav-link" href="#!">
                  SERVICE
                </a>
              </li>
              <li class="nav-item text-center  ">
                <i class="fa-sharp fa-solid fa-address-card "></i>
                <a class="nav-link" href="#!">
                  CONTACT
                </a>
              </li>
            </ul>
            <i class="fa-solid fa-magnifying-glass border p-2 rounded-circle testi"></i>
          </div>
        </div>
      </nav>

      {/* Carousal */}
      <div
        id="myCarousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.fringsgruppe.de/wp-content/uploads/2016/09/Frings-Elektroinstallationstechnik-TGA-Referenz-KuBiz-590p.jpg"
              alt="Los Angeles"
              class="d-block"
              style={{ width: "100%", height: "675px" }}
            />
            <div class="container">
              <div class="carousel-caption  text-start">
                <h1>Trusted by more than 50,000 businesses worldwide.</h1>
                <p>Over 180 countries and 120 currencies supported.</p>
                <p>
                  <a class="btn btn-lg bgcolor text-white" href="#!">
                    LEARN MORE
                  </a>
                  <a class="btn btn-lg gcolor" href="#!">
                    BUY NOW
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.fringsgruppe.de/wp-content/uploads/2016/09/Frings-Elektroinstallationstechnik-TGA-Referenz-KuBiz-590p.jpg"
              alt="Los Angeles"
              class="d-block"
              style={{ width: "100%", height: "675px" }}
            />
            <div class="container">
              <div class="carousel-caption  text-start">
                <h1>Trusted by more than 50,000 businesses worldwide.</h1>
                <p>Over 180 countries and 120 currencies supported.</p>
                <p>
                  <a class="btn btn-lg bgcolor text-white" href="#!">
                    LEARN MORE
                  </a>
                  <a class="btn btn-lg gcolor" href="#!">
                    BUY NOW
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
