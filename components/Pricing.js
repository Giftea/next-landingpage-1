import React, { useState } from "react";

const Pricing = () => {
  const [pricing, setPricing] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setPricing(!pricing);
  };
  return (
    <section className="pb-90" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-8">
            <div className="section-title text-center">
              <h2>Choose Plans & Pricing</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit lorem ipsum anim id est laborum
                perspiciatis unde.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="price-nav-wrap">
              <div className="price--nav-inner">
                <nav>
                  <div className="nav info-tabs">
                    <a
                      className={`price--nav-item ${
                        pricing === false ? "active" : ""
                      }`}
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#month"
                      onClick={handleClick}
                    >
                      Monthly
                    </a>
                    <a
                      className={`price--nav-item ${
                        pricing === true ? "active" : ""
                      }`}
                      data-toggle="tab"
                      href="#year"
                      onClick={handleClick}
                    >
                      Yearly
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <div className="price-content">
              {pricing === false ? (
                <div id="month">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan text-center">
                        <div className="single-price-top">
                          <h4>Standard</h4>
                          <span>$20</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan active text-center">
                        <div className="single-price-top">
                          <h4>Business</h4>
                          <span>$30</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan text-center">
                        <div className="single-price-top">
                          <h4>Professional</h4>
                          <span>$40</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {pricing === true ? (
                <div id="year">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan text-center">
                        <div className="single-price-top">
                          <h4>Standard</h4>
                          <span>$200</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan active text-center">
                        <div className="single-price-top">
                          <h4>Business</h4>
                          <span>$300</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="single-price-plan text-center">
                        <div className="single-price-top">
                          <h4>Professional</h4>
                          <span>$400</span>
                        </div>
                        <div className="single-price-body">
                          <div className="price-list">
                            <ul>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 pages
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                500 gb storage
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                10 sdd Database
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Free coustom domain
                              </li>
                              <li>
                                <span>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                24/7 free support
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
