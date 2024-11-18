import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <h1>Phitter Store</h1>
            </div>
            <p>
              Phitter Store is an eCommerce platform that caters to a broad
              range of consumer needs.
            </p>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Service</h2>
            <ul>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order Status</li>
              <li>Payment Option</li>
            </ul>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Online Shop</h2>
            <ul>
              <li> Watch </li>
              <li>Mobile Phone IOS</li>
              <li>Mobile Phone Andriod</li>
              <li>Monitor </li>
            </ul>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Tik thla, 371 st, Phnum Penh </li>
              <li>Email: Phitterstore@gmail.com</li>
              <li>Phone: 0886224813</li>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-tiktok"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
