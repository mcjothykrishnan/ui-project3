import React from "react";

import port1 from "./images/port1.png";
import port2 from "./images/port2.png";
export default function Footer() {
  return (
    <>
      {/* best portfolio */}
      <div className="container-fluid py-5 testi">
        <div className="container ">
          <h2>OUR BEST PORTFOLIO</h2>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto bgcolor gcolor"
            style={{ width: "200px", height: "4px", opacity: "100%" }}
          />
          <div className="container row g-0 d-flex  justify-content-between align-items-center">
            <div
              className="col-md-4 d-flex flex-column "
              style={{ width: "400px" }}
            >
              <div
                class="bg-image hover-overlay ripple "
                data-mdb-ripple-color="light"
                style={{ maxWidth: "30rem" }}
              >
                <img src={port1} class="w-100 mb-4" alt="Louvre" />
                <a href="#!">
                  <div
                    class="mask text-light d-flex justify-content-center flex-column text-center"
                    style={{ backgroundColor: "rgba(240,240,240,0.5)" }}
                  >
                    <h4>
                      <i class="fas fa-plus"></i>
                    </h4>
                  </div>
                </a>
              </div>
              <h4 className="text-center">DIGITAL WRITING</h4>
            </div>

            <div
              className="col-md-4 d-flex flex-column  "
              style={{ width: "400px" }}
            >
              <div
                class="bg-image hover-overlay ripple "
                data-mdb-ripple-color="light"
                style={{ maxWidth: "30rem" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAPgqvwM9sr7kzHNiVIJ-ExO3qHc7B_fhevL2S5ozyAJ_y2n5H0oEPpVlW-eUD1e1Bk8&usqp=CAU"
                  class="w-100 mb-4"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    class="mask text-light d-flex justify-content-center flex-column text-center"
                    style={{ backgroundColor: "rgba(240,240,240,0.5)" }}
                  >
                    <h4>
                      <i class="fas fa-plus"></i>
                    </h4>
                  </div>
                </a>
              </div>
              <h4 className="text-center">ADMIN DASHBOARD DESIGN</h4>
            </div>

            <div
              className="col-md-4 d-flex flex-column  "
              style={{ width: "400px" }}
            >
              <div
                class="bg-image hover-overlay ripple "
                data-mdb-ripple-color="light"
                style={{ maxWidth: "30rem" }}
              >
                <img src={port2} class="w-100 mb-4" alt="Louvre" />
                <a href="#!">
                  <div
                    class="mask text-light d-flex justify-content-center flex-column text-center"
                    style={{ backgroundColor: "rgba(240,240,240,0.5)" }}
                  >
                    <h4>
                      <i class="fas fa-plus"></i>
                    </h4>
                  </div>
                </a>
              </div>
              <h4 className="text-center">MOBILE APP DESIGN</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-lg bgcolor text-white   mt-5">
              BROWSE PROJECT
            </div>
          </div>
        </div>
      </div>
      {/* label */}
      <div className="container d-md-flex my-5">
        <h2>
          We will make you proud. Hire us and
          <span className="gcolor"> Start your dream project now.</span>
        </h2>
        <div className="btn btn-lg ms-auto text-white bgcolor">GET STARTED</div>
      </div>
      {/* testimonal */}
      <div
        id="carouselExampleControls"
        className="carousel slide text-center carousel-dark testi py-5"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="rounded-circle shadow-1-strong my-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
                <h6>Maria, USA.</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong my-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
                <h6>Joe, USA.</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong my-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
                <h6>Marry, USA.</h6>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* map */}
      <section class="p-0 p-md-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <div class="container my-4">
                <div class="row g-0">
                  <div class="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 class="fw-400 ">Sign Up</h3>
                    <hr
                      class="mb-4 mt-0 d-inline-block mx-auto bgcolor gcolor"
                      style={{ width: "60px", height: "4px", opacity: "100%" }}
                    />
                    <form id="loginForm" method="post">
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control testi"
                          id="fullName"
                          required
                          placeholder="Name"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control testi"
                          id="emailAddress"
                          required
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control py-5 testi"
                          id="loginPassword"
                          required
                          placeholder="Write your Message"
                        />
                      </div>
                      <div class="d-flex justify-content-end mt-4 mb-3">
                        <button class="btn btn-primary bgcolor" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
                class="h-100 w-100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <div className="container-fluid dar pt-4">
        <div class="container ">
          <footer class="text-center- text-lg-start text-white ">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">ABOUT US</h6>

                  <p className="text-start">
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                  <ul className="nav ">
                    <li className="nav-item">
                      <a href="#Link" className="nav-link text-white  ps-0 ">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#Link" className="nav-link text-white ps-0 ">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#Link" className="nav-link text-white ps-0 ">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#Link" className="nav-link text-white ps-0 ">
                        <i class="fa-brands fa-skype"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#Link" className="nav-link text-white ps-0 ">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                  <h6 class="text-uppercase fw-bold mb-4">USEFUL LINK</h6>
                  <div className="text-start">
                    <p>
                      <a href="#!" class="text-white mb-4">
                        <i class="fa-solid fa-play me-2"></i>
                        Bootstrap
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-white mb-4">
                        <i class="fa-solid fa-play me-2"></i>
                        WordPress
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-white mb-4">
                        <i class="fa-solid fa-play me-2"></i>
                        BrandFlow
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">
                        <i class="fa-solid fa-play me-2 mb-0"></i>
                        Bootstrap Angular
                      </a>
                    </p>
                  </div>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-0 mt-md-5">
                  <div className="text-start">
                    {" "}
                    <p>
                      <a href="#!" class="text-white">
                        <i class="fa-solid fa-play  me-2"></i>
                        Become an Affiliate
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">
                        <i class="fa-solid fa-play me-2"></i>
                        Shipping Rates
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">
                        <i class="fa-solid fa-play me-2"></i>
                        Help
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="fw-bold">CONTACT US</h6>
                  <div className="text-start">
                    <p>New York, NY 10012, US</p>
                    <p>
                      <span className="gcolor">Email :</span> info@example.com
                    </p>
                    <p>
                      <span className="gcolor">Phone :</span> + 01 234 567 88
                    </p>
                    <p>
                      <span className="gcolor">Fax :</span> + 01 234 567 89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div
          class="text-center py-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright reserved by
          <a class="gcolor" href="#!">
            {" "}
            JothyKrishnanMC
          </a>
        </div>
      </div>
    </>
  );
}
