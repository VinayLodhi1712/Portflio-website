import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import iot from "../../Assets/Projects/iot.png";
import Talkofcode from "../../Assets/Projects/talkofcode.png";
import tempconverter from "../../Assets/Projects/tempconverter.png";
import books1 from "../../Assets/Projects/books1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Talkofcode}
              isBlog={false}
              title="Talkofcode"
              description="At Talkofcode, we’re more than just a platform - we’re a vibrant community of learners, creators, and enthusiasts united by out passion for technology. Our mission is simply: to provide a dynamic space where individuals from all backgrounds can come together to learn, share and grow."
              ghLink="https://github.com/VinayLodhi1712/endsemtoday"
              demoLink="https://talkofcode.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books1}
              isBlog={false}
              title="Bookshop"
              description="This is a online book store e-commerce plateform which have basic functionalities of an ecommerce plateform made up using MERN Stack technology. It have basic CRUD operations for an author and users can buy books and add to cart books."
              ghLink="https://github.com/VinayLodhi1712/mern-book-store"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="DigiLock"
              description="An Iot project named Digilock which is for home security and adding some functionalities to homelock. Mainly it does when the lock open or closed than it send notifications to respected owners of house also there is an functionality of anyone come in front of door than door bell ring. Made using Arduino and some sensors."
              ghLink="https://github.com/VinayLodhi1712/Digilock-iot"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify-Clone"
              description="Spotify Clone made up using Html, Css and javascript technology which is just a clone/landing page of famous music streaming website Spotify. It has some songs which can be play and paused by users."
              ghLink="https://github.com/VinayLodhi1712/Spotify-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tempconverter}
              isBlog={false}
              title="Temperature Converter"
              description="A basic temperature converter made up using html,css and javascript which convert temperature from kelving to fahrenheit and celsius and vice-versa."
              ghLink="https://github.com/VinayLodhi1712/tempconverter"
              demoLink="https://vinaylodhi1712.github.io/tempconverter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Landing Page"
              description="Netflix Landing Page Clone made with HTML and CSS. I have also made it responsive to work on various devices. This is the project where i started learning web dev from scratch. This is the landing page cone of famous movie streaming website Netflix"
              ghLink="https://github.com/VinayLodhi1712/netflix-clone-landing-page"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
