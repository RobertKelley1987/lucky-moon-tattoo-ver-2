import React from "react";
import { Link } from "gatsby";
import Instagram from "../icons/Instagram";
import Email from "../icons/Email";
import Youtube from "../icons/Youtube";

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <ul className="footer-list">
          <li>
            <a
              className="footer-social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/luckymoon.tattoo/"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              className="footer-social"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:luckymoontattooco@gmail.com"
            >
              <Email />
            </a>
          </li>
          <li>
            <a
              className="footer-social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://youtube.com/@luckymoontattooshop5114"
            >
              <Youtube />
            </a>
          </li>
        </ul>
        <nav>
          <ul className="footer-list">
            <li>
              <Link className="footer-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <a
                className="footer-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://luckymoontattoo.bigcartel.com/"
              >
                Merch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;
