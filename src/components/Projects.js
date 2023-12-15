import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import VirtualParkWeb from "../assets/img/VirtualParkWeb.png";
import EatNGo from "../assets/img/EatNGo.png";
import HiMo from "../assets/img/HimoApp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EatN'Go",
      description: "App based mobile and web using Flutter, Laravel & My SQL",
      imgUrl: EatNGo,
    },
    {
      title: "Virtual Park Web",
      description: "Web App for Viewing 360-degree virtual tour created with MERN stack",
      imgUrl: VirtualParkWeb,
    },
    {
      title: "HiMo",
      description: "App for Historical Monument using Blender & Unity",
      imgUrl: HiMo,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Showcase of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
