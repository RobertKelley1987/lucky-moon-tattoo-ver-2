import React from "react";
import Phone from "./icons/Phone";
import Email from "./icons/Email";

function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info">
        <div className="contact-info-links">
          <p className="contact-info-link-wrapper">
            <Phone />
            <a className="contact-info-link" href="tel:+14016185922">
              (401) 618-5922
            </a>
          </p>
          <p className="contact-info-link-wrapper">
            <Email />
            <a
              className="contact-info-link"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:luckymoontattooco@gmail.com"
            >
              luckymoontattooco@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-info-location">
          <p className="contact-info-address">
            <span>Lucky Moon Tattoo</span>
            <span>20 Cedar Swamp Rd.</span>
            <span className="nowrap">Smithfield, RI 02917</span>
          </p>
          <p className="contact-info-hours">
            Hours are Tuesday through Saturday from{" "}
            <span className="nowrap">12 PM to 8 PM</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
