import { Col, Row } from "antd";
import {
  LOGO_FOOTER,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
} from "assets";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="top-section container">
        <Row gutter={[10, 30]}>
          <Col xs={24} sm={24} md={12}>
            <div className="top-left-section">
              <img src={LOGO_FOOTER} alt="" />
              <p>
                Holidays will be very enjoyable by enjoying the facilities of
                the hotelyou like, let's order immediately
              </p>
              <div className="icons-wrapper">
                {socialIcons.map(({ icon, id }) => (
                  <img src={icon} alt="" key={id} />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Row gutter={[30, 30]}>
              <Col xs={8} md={8}>
                <div className="links-wrapper">
                  <h5>Links</h5>
                  {links.map(({ title }) => (
                    <Link to="#">{title}</Link>
                  ))}
                </div>
              </Col>
              <Col xs={8} md={8}>
                <div className="links-wrapper">
                  <h5>About</h5>
                  {about.map(({ title }) => (
                    <Link to="#">{title}</Link>
                  ))}
                </div>
              </Col>
              <Col xs={8} md={8}>
                <div className="links-wrapper">
                  <h5>Our Location</h5>
                  <p>
                    Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="bottom-section">
        <div className="container">
          <div className="d-flex justify-space-between">
            <p>© 2021 OneSearch All rights reserved.</p>
            <div className="bottom-section-links">
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialIcons = [
  {
    id: 0,
    icon: FACEBOOK_ICON,
    href: "",
  },
  { id: 1, icon: INSTAGRAM_ICON, href: "" },
  { id: 2, icon: TWITTER_ICON, href: "" },
  { id: 3, icon: YOUTUBE_ICON, href: "" },
];

const links = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Services",
    href: "",
  },
  {
    title: "Pricing",
    href: "",
  },
  {
    title: "Features",
    href: "",
  },
  {
    title: "Contact",
    href: "",
  },
];

const about = [
  { title: "Partners", href: "" },
  { title: "Careers", href: "" },
  { title: "Press", href: "" },
  { title: "Community", href: "" },
];

export default Footer;
