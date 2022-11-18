import React from "react";
import img1 from "./images/partner-01.png";
import img2 from "./images/partner-02.png";
import img3 from "./images/partner-03.png";
import img4 from "./images/partner-04.png";
export default function Content() {
  return (
    <>
      {/* BRAND */}
      <div className="container-fluid rounded text-center d-flex justify-content-center text-white py-4">
        <div className="container row g-4 text-center">
          <div className="col-6 col-lg-3">
            <img src={img1} class="w-100" alt="Louvre" />
          </div>
          <div className="col-6 col-lg-3">
            <img src={img2} class="w-100" alt="Louvre" />
          </div>
          <div className="col-6 col-lg-3">
            <img src={img3} class="w-100" alt="Louvre" />
          </div>

          <div className="col-6 col-lg-3">
            <img src={img4} class="w-100" alt="Louvre" />
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="container-fluid testi ">
        <div className=" row ">
          <div className="position-relative col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className=" img-fluid p-0 h-100"
              alt="dcscsv"
            />
            <div className="position-absolute top-50 start-50 translate-middle gcolor rounded-circle p-4 testi">
              <i class="fa-solid fa-play fa-3x  "></i>
            </div>
          </div>

          <div className="container col-md-6 p-5">
            <h3>OUR SKILLNESS</h3>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto bgcolor gcolor"
              style={{ width: "100px", height: "4px", opacity: "100%" }}
            />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <b>Kubis</b> Ipsum has been the industry's standard
              dummy text ever since the 1500s, Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
            <h5>Adobe photoshop</h5>
            <div className="progress " id="proba">
              <div
                className="progress-bar w-50 rounded bgcolor"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h5>Adobe illustrator</h5>
            <div className="progress " id="proba">
              <div
                className="progress-bar w-25 rounded bgcolor"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <h5>Web design</h5>
            <div className="progress" id="proba">
              <div
                className="progress-bar w-75 rounded bgcolor"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <h5>Programming</h5>
            <div className="progress" id="proba">
              <div
                className="progress-bar w-100 rounded bgcolor"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                100%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="container py-5">
        <div className="text-center ">
          <h3>OUR BEST SERVICES</h3>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto bgcolor gcolor text-center"
            style={{ width: "100px", height: "4px", opacity: "100%" }}
          />
        </div>
        <div>
          <div>
            <div>
              <div className="row  d-flex  justify-content-around align-items-center ">
                <div className="col-md-3  border bor ">
                  <div className="fw-bold py-2  d-flex justify-content-center align-items-center flex-column  ">
                    <span className="fa-3x  gcolor">
                      <i class="fa-solid fa-crop-simple"></i>
                    </span>
                    CREATIVE DESIGN
                  </div>
                  <div className="py-1 text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s
                  </div>
                  <div className="gcolor text-center">see more</div>
                </div>
                <div className="col-md-3  border bor">
                  <div className="fw-bold py-2  d-flex justify-content-center align-items-center flex-column  ">
                    <span className="fa-3x gcolor">
                      <i class="fa-brands fa-php"></i>
                    </span>
                    PHP DESIGN
                  </div>
                  <div className="py-1 text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s
                  </div>
                  <div className="gcolor text-center">see more</div>
                </div>

                <div className="col-md-3  border bor">
                  <div className="fw-bold py-2  d-flex justify-content-center align-items-center flex-column  ">
                    <span className="fa-3x gcolor">
                      <i class="fa-sharp fa-solid fa-circle-info"></i>
                    </span>
                    24/7 SUPPORT
                  </div>
                  <div className="py-1 text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s
                  </div>
                  <div className="gcolor text-center">see more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
