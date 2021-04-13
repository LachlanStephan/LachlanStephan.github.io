import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import CardProp from "./card/card";
import {
  FaGithub,
  FaReact,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextDotJs,
  SiNodeDotJs,
  SiJest,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";

// Images for works page
import books from "../../images/Books.png";
import ss from "../../images/scheduleStuff.png";
import marvel from "../../images/Marvel.png";
import fs from "../../images/FacilitySite.png";
import mysite from "../../images/mysite.png";

// CSS for container
const worksStyle: CSS.Properties = {
  textAlign: "left",
  padding: "1.5em",
};

// CSS for card row
const cardStyle: CSS.Properties = {
  paddingTop: "2.5em",
};

// GitHub icon
const ghub = <FaGithub />;

// Icons for tech stack - foreach proj
const reactIcon = <FaReact />;
const bootstrap = <FaBootstrap />;
const css3 = <FaCss3 />;
const html5 = <FaHtml5 />;
const php = <FaPhp />;
const tailwind = <SiTailwindcss />;
const next = <SiNextDotJs />;
const node = <SiNodeDotJs />;
const jest = <SiJest />;
const typescript = <SiTypescript />;
const mysql = <SiMysql />;

const Works: React.FC = () => {
  return (
    <Container id="works" style={worksStyle}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 4,
        }}
      >
        <Row style={cardStyle}>
          <Col>
            <CardProp
              cardImg={ss}
              alt="Screenshot of scedule stuff"
              cardTitle="Schedule stuff"
              cardText="This is my current project and first full stack web application. The link to the web service is in the repo below. The intention going forward is to make this a pwa and build an admin panel."
              tech={next}
              tech1={tailwind}
              tech2={css3}
              tech3={node}
              tech4={jest}
              tech5={mysql}
              hrefText="https://github.com/LachlanStephan/scheduleStuff"
              icon={ghub}
            />
          </Col>
        </Row>
        <Row style={cardStyle}>
          <Col>
            <CardProp
              cardImg={mysite}
              alt="Screenshot of my personal site"
              cardTitle="My site"
              cardText="This is my personal site to show and keep track of some my works. It will be used as a portfolio and a place for me to try new technologies and techniques."
              tech={reactIcon}
              tech1={typescript}
              tech2={bootstrap}
              tech3={css3}
              hrefText="https://github.com/LachlanStephan/mysite"
              icon={ghub}
            />
          </Col>
        </Row>
        <Row style={cardStyle}>
          <Col>
            <CardProp
              cardImg={fs}
              alt="Screenshot of Facility site"
              cardTitle="Facility Site"
              cardText="This Facility site was made for a small company and allows users to print a pdf and contact the company"
              tech={reactIcon}
              tech1={bootstrap}
              tech2={css3}
              hrefText="https://github.com/LachlanStephan/FacilitySite-"
              icon={ghub}
            />
          </Col>
        </Row>
        <Row style={cardStyle}>
          <Col>
            <CardProp
              cardImg={marvel}
              alt="Screenshot of Marvel search"
              cardTitle="Marvel Search"
              cardText="Marvel Search was built as a project for my Diploma of Web Development. It was my first experience with react and fetching data from a 3rd party api."
              hrefText="https://github.com/LachlanStephan/Marvel-ISS4/tree/main/marvel-api"
              tech={reactIcon}
              tech1={bootstrap}
              tech2={css3}
              icon={ghub}
            />
          </Col>
        </Row>
        <Row style={cardStyle}>
          <Col>
            <CardProp
              cardImg={books}
              alt="Screenshot of Books site"
              cardTitle="Books"
              cardText="This is an admin panel for creating/updating and deleting books, an assignment for my Diploma of Web Development - This project was used for learning PHP and MySQL."
              hrefText="https://github.com/LachlanStephan/BooksProj"
              tech={php}
              tech1={html5}
              tech2={css3}
              icon={ghub}
            />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Works;
