import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import './Extra.css';
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import logo2 from "../../Assets/logo2.png";
import anotherImage from "../../Assets/home-main.svg"; // Add your second image here
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Extra.css";
function Home() {
  const [isRotated, setIsRotated] = useState(false);
  const [currentImage, setCurrentImage] = useState(logo2);

  const handleImageClick = () => {
    setIsRotated(true);
    setTimeout(() => {
      setCurrentImage(currentImage === logo2 ? anotherImage : logo2);
      console.log("clicked")
      setIsRotated(false);
    }, 500); // Match the duration of the CSS transition
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Vinay Anand Lodhi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="image-wrapper" style={{cursor:"pointer"}}  onClick={handleImageClick}>
                
              <img
                src={currentImage}
                alt="home pic"
                className={`img-fluid img-circle ${isRotated ? "rotate" : ""}`}
                style={{ maxHeight: "450px"}}
               
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
