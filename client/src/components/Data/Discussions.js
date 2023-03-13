import React from 'react';
import "./Discussion.css";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';
import { MDBRow, MDBCol,MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';


function Discussions() {
  return (
      <>
          <div className="mx-5 mt-5">
              <h3>Discussions</h3>
          </div>
          <MDBCard className="mx-5 mb-5">
              <MDBCardHeader className="d-flex justify-content-between align-items-center pe-5">
                  <MDBInputGroup className="flex-grow-1 me-2">
                      <MDBInput label="Search" />
                      <MDBBtn rippleColor="dark">
                          <MDBIcon icon="search" />
                      </MDBBtn>
                  </MDBInputGroup>
                  <MDBBtn className="me-1" color="danger">
                     Ask a question
                  </MDBBtn>
              </MDBCardHeader>
              <MDBCardBody>
                  <MDBTypography blockquote className="mb-0">
                      <MDBRow className="mb-3">
                          <MDBCol ms="3" md="1">
                              <img
                                  src="https://i.postimg.cc/Kzj1VJVN/testBH.jpg"
                                  alt=""
                                  className="DiscImg"
                              />
                          </MDBCol>
                          <MDBCol ms="3" md="2" className="DiscUser">
                              <span className="DiscUserDay">2 days ago</span>
                              <span className="DiscUsername">Naveen Thomas</span>
                          </MDBCol>
                          <MDBCol md="7" ms="8" className="DiscQtn">
                              Cannot read properties of undefined (reading 'dark') error when trying to extend MUI color
                              palette.
                          </MDBCol>
                          <MDBCol md="2" ms="4" className="DiscUser">
                              <span className="DiscUserDay">1</span>
                              <span className="DiscUsername">answers</span>
                          </MDBCol>
                      </MDBRow>

                      <MDBRow className="mb-3">
                          <MDBCol ms="3" md="1">
                              <img
                                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                  alt=""
                                  className="DiscImg"
                              />
                          </MDBCol>
                          <MDBCol ms="3" md="2" className="DiscUser">
                              <span className="DiscUserDay">3 days ago</span>
                              <span className="DiscUsername">Swathy Hari</span>
                          </MDBCol>
                          <MDBCol md="7" ms="8" className="DiscQtn">
                              I making a GET API to fetch an image, the response is status 200 and its data is in byte64
                              format. The problem here is, I was not able to read the response in my component.
                          </MDBCol>
                          <MDBCol md="2" ms="4" className="DiscUser">
                              <span className="DiscUserDay">1</span>
                              <span className="DiscUsername">answers</span>
                          </MDBCol>
                      </MDBRow>

                      <MDBRow className="mb-3">
                          <MDBCol ms="3" md="1">
                              <img
                                  src="https://i.postimg.cc/dtP8kcgc/testH.png"
                                  alt=""
                                  className="DiscImg"
                              />
                          </MDBCol>
                          <MDBCol ms="3" md="2" className="DiscUser">
                              <span className="DiscUserDay">4 days ago </span>
                              <span className="DiscUsername">Anandhu sasi</span>
                          </MDBCol>
                          <MDBCol md="7" ms="8" className="DiscQtn">
                              Why am i getting an error when trying to install angular.
                          </MDBCol>
                          <MDBCol md="2" ms="4" className="DiscUser">
                              <span className="DiscUserDay">1</span>
                              <span className="DiscUsername">answers</span>
                          </MDBCol>
                      </MDBRow>

                      <MDBRow className="mb-3">
                          <MDBCol ms="3" md="1">
                              <img
                                  src="https://i.postimg.cc/dtP8kcgc/testH.png"
                                  alt=""
                                  className="DiscImg"
                              />
                          </MDBCol>
                          <MDBCol ms="3" md="2" className="DiscUser">
                              <span className="DiscUserDay">6 days ago </span>
                              <span className="DiscUsername">Dunny Susan</span>
                          </MDBCol>
                          <MDBCol md="7" ms="8" className="DiscQtn">
                              How do i avoid cors error.
                          </MDBCol>
                          <MDBCol md="2" ms="4" className="DiscUser">
                              <span className="DiscUserDay">1</span>
                              <span className="DiscUsername">answers</span>
                          </MDBCol>
                      </MDBRow>
                      <footer className="text-center footerptr">
                          <u>view more discussions</u>
                      </footer>
                  </MDBTypography>
              </MDBCardBody>
          </MDBCard>
          
      </>
  );
}

export default Discussions