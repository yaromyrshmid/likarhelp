import React, { useState, useEffect } from "react";

import logo from "../images/logo.svg";
import logoWhite from "../images/logoWhite.svg";
import { Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import "../css/Navigation.css";

export const Navigation = props => {
  const [logoStyle, setLogoStyle] = useState("");
  const [servicesStyle, setServicesStyle] = useState({
    color: "",
    weight: ""
  });
  const [contactsStyle, setContactsStyle] = useState({
    color: "",
    weight: ""
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollLogo, true);
  }, []);

  const handleScrollLogo = () => {
    const scr1Height = document
      .querySelector("#Screen1")
      .getBoundingClientRect().height;
    const scr1Y = document.querySelector("#Screen1").getBoundingClientRect().y;
    const scr2Height = document
      .querySelector("#Screen2")
      .getBoundingClientRect().height;
    const scr2Y = document.querySelector("#Screen2").getBoundingClientRect().y;

    const navbarHeight = document
      .querySelector(".navbar")
      .getBoundingClientRect().height;

    if (
      scr1Height + scr1Y - navbarHeight + 83 < 0 &&
      scr2Height + scr2Y - navbarHeight + 83 > 0
    ) {
      setServicesStyle({
        color: "#FFFFFF",
        weight: "bold"
      });
    } else {
      setServicesStyle({
        color: "",
        weight: ""
      });
    }

    if (
      scr1Height + scr1Y - navbarHeight + 33 < 0 &&
      scr2Height + scr2Y - navbarHeight + 33 > 0
    ) {
      setContactsStyle({
        color: "#FFFFFF",
        weight: ""
      });
    } else if (scr2Height + scr2Y - navbarHeight + 33 < 0) {
      setContactsStyle({
        color: "",
        weight: "bold"
      });
    } else {
      setContactsStyle({
        color: "",
        weight: ""
      });
    }

    if (
      scr1Height + scr1Y - 315 + 220 < 0 &&
      scr2Height + scr2Y - 315 + 220 > 0
    ) {
      setLogoStyle("white");
    } else {
      setLogoStyle("");
    }
  };

  const anchorClickHandler = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sublinkClickHandler = id => {
    props.changeActiveCard(id);
  };

  const navbarCollapse = color => {
    return (
      <Navbar.Collapse id="basic-navbar-nav" className="w-100">
        <Nav>
          <Nav.Link
            className={"scroll " + color}
            onClick={() => anchorClickHandler("Screen2")}
            style={{
              color: servicesStyle.color,
              fontWeight: servicesStyle.weight
            }}
          >
            Послуги
            <ul>
              <li
                className="sub-nav-link"
                onClick={() => sublinkClickHandler("6")}
              >
                Медсестринська <br /> допомога
              </li>
            </ul>
          </Nav.Link>
          <Nav.Link
            className={"scroll " + color}
            onClick={() => anchorClickHandler("Screen4")}
            style={{
              color: contactsStyle.color,
              fontWeight: contactsStyle.weight
            }}
          >
            Контакти
          </Nav.Link>
          <div className="d-flex flex-column align-items-end d-md-none">
            <a className="phoneNum" href="tel:+380671035848">
              +38 067 103 5848
            </a>
            <a className="phoneNum mt-3" href="mailto:likarhelp@gmail.com">
              likarhelp@gmail.com
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    );
  };

  return (
    <Navbar variant="" expand="md" fixed="top">
      {/* xs - sm */}
      <Row className="d-flex d-md-none">
        <Col>
          <Navbar.Brand onClick={() => anchorClickHandler("Screen1")}>
            <Image src={logoStyle === "" ? logo : logoWhite} alt="logo" />
            <span
              className="sub24-7"
              style={logoStyle === "" ? {} : { color: "white" }}
            >
              24/7
            </span>
          </Navbar.Brand>
          <p onClick={() => anchorClickHandler("Screen1")} className="slogan">
            допомагає і відповідає
          </p>
        </Col>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {navbarCollapse("allways-dark")}
      </Row>
      <Row className="d-none d-md-block">
        <Navbar.Brand onClick={() => anchorClickHandler("Screen1")}>
          <div>
            <Image src={logoStyle === "" ? logo : logoWhite} alt="logo" />
            <span
              className="sub24-7"
              style={logoStyle === "" ? {} : { color: "white" }}
            >
              24/7
            </span>
          </div>
          <p onClick={() => anchorClickHandler("Screen1")} className="slogan">
            допомагає і відповідає
          </p>
        </Navbar.Brand>
      </Row>
      <Row className="d-none d-md-flex">
        <Col xs={7}>{navbarCollapse()}</Col>
      </Row>
    </Navbar>
  );
};
