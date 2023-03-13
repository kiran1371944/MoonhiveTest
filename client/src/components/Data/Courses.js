import React from 'react';
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBCol,MDBRow} from 'mdb-react-ui-kit';

function Courses() {
  return (
      <>
          <MDBCard alignment="center" className="mx-5 my-3 ">
              <MDBCardBody className="m-0" style={{ position: "relative" }}>
                  <MDBCardImage
                      src="https://i.postimg.cc/59SfWw5d/pngtree-urban-office.png"
                      alt="..."
                      position="top"
                      style={{ maxWidth: "100%", height: "30rem" }}
                  />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                      <MDBCardTitle className="fs-1">Introduction to TypeScript</MDBCardTitle>
                      <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                      <MDBBtn href="#">Resume</MDBBtn>
                      <MDBBtn className="ms-2" href="#">
                          Start over
                      </MDBBtn>
                  </div>
              </MDBCardBody>
          </MDBCard>

          <div className="mx-5 mt-5">
              <h3>Courses</h3>
          </div>
          <MDBRow className="mx-5 my-2">
              <MDBCol md="3" sm="6" className="mb-3">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/Pf6H3dz1/angular.png"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "12rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn Anular</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="6">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/hPHH6vJQ/react.png"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "12rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn React.js</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="6">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/rmFbxtH3/vue.jpg"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "12rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn Vue.js</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="6">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/Gt45Sndj/Python.jpg"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "12rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn Python</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
          </MDBRow>

          <MDBRow className="mx-5 my-4">
              <div className="mx-1 mt-1">
                  <h3>Achievements</h3>
              </div>
              <MDBCol md="6" sm="12" >
                  <MDBCard className='p-2'>
                      <MDBCardImage
                          src="https://i.postimg.cc/fWvykLXF/Full-Stack-Development.png"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "23rem" }}
                      />
                  </MDBCard>
              </MDBCol>
              <MDBCol md="6" sm="12">
                  <MDBCard className='p-2'>
                      <MDBCardImage
                          src="https://i.postimg.cc/Lsswkx0L/banner-a84f53ec-5db5-4710-beea-9a9af3aa0f15.png"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "23rem" }}
                      />
                  </MDBCard>
              </MDBCol>
          </MDBRow>
      </>
  );
}

export default Courses