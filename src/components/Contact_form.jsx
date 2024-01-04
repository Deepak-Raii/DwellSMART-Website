import React from "react";
import "../css/contact_form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="container-fluid form-mainDiv">
      <div className="row formMainDiv">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="contact-info">
            <h2 className="contact-title">Have Any Questions?</h2>
            <p>
              Our goal is to make your experience with us seamless and
              transparent. Your satisfaction is our priority, and we look
              forward to addressing any questions you may have.
            </p>
            <ul className="contact-info">
              <li>
                <div className="info-left">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <div className="info-right">
                  <h4>+1234567890</h4>
                </div>
              </li>
              <li>
                <div className="info-left">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="info-right">
                  <h4>support@dwellsmart.co.in</h4>
                </div>
              </li>
              <li>
                <div className="info-left">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="info-right">
                  <h4>
                    302, Tower B Logix Technova Sector 132, Noida, UP - 201304,
                    India
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="contact-form">
            <form id="contact-form">
              <input type="hidden" name="form-name" value="contactForm" />
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="first-name"
                      placeholder="Enter Your Name *"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email *"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      rows="4"
                      name="message"
                      className="form-control"
                      id="description"
                      placeholder="Enter Your Message *"
                      required="required"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn-big btn btn-bg">
                    Send Us <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
