import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vinayprofile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Contact from "../Contact/Contact";
import "./Extra.css";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="margin">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've started to really enjoy programming and I feel like I've learned a little bit so far, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript. </b>
              </i>
              <br />
              <br />
              I'm interested in creating new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and I also find{" "}
                <b className="purple">
                  Blockchain.
                </b> fascinating.
              </i>
              <br />
              <br />
              When I can, I love working on projects with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Tools
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid img-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Contact />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinay-anand-lodhi-5694b1234"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCDSoSvpgsmz4b6gB1k3OLjg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <div class="tertiary">
        <div class="portfolio-container">
          <a href="#home" class="portfolio-link">
            <div class="icon-container">
              <div class="icon-inner"></div>
            </div>

            <a href="https://www.hitwebcounter.com" target="_blank">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=14171001&style=0001&nbdigits=5&type=page&initCount=1000"
                title="Counter Widget"
                alt="Visit counter For Websites"
                class="counter-widget"
              />
            </a>
            <p class="sectionSubText">Portfolio Visits</p>
          </a>
        </div>
        </div>
      </Container>
    </Container>
  );
}
export default Home2;
