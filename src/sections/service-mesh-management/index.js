import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import MeshSectionWrapper from "./ServiceMesh.style";
import SectionTitle from "../../reusecore/SectionTitle";
import MesheryLogo from "../../assets/images/meshery/full-logo/meshery-logo-light-text.svg";
import ServiceMesh from "./images/service-mesh.svg";
import MeshMap from "./images/meshmap.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "gatsby";

const ServiceMeshManagement = () => {
  return (
    <MeshSectionWrapper>
      <Container fullWidthSM>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={false}
            UniWidth="65%"
          >
            <h4 className="title">Service Mesh Management</h4>
            <h2 className="big-title">
              Manage your service mesh with features<span> you won't find anywhere else</span>.
            </h2>
          </SectionTitle>
          <Col xs={12} sm={12} md={6}>
            <Link to="/service-mesh-management/meshery">
              <img className="mesh-image" alt="Meshery - the multi-service mesh manager" src={MeshMap} />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text">
                Meshery is <span>the</span> service mesh management plane.
              </div>
              <div className="description">
                Adopt and operate any service mesh with confidence using Meshery's management features.
              </div>

              <div className="backBtn">
                <br />
                <Link to="/service-mesh-management/meshery">
                  <p>Learn More <span><IoIosArrowForward className="icon" /></span></p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MeshSectionWrapper>
  );
};

export default ServiceMeshManagement;
