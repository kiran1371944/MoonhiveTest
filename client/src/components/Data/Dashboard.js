import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./Dashboard.css";

import {MDBCard,MDBCardBody,MDBCardText,MDBCardImage,MDBRow,
  MDBCol,MDBTypography} from 'mdb-react-ui-kit';

function Dashboard() {

  const navigate = useNavigate(); 
  const dashboardPage = async() => {
    try{
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4200/dashboard',{
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }, 
        credentials: "include"
        // withCredentials: true
      });

      if(response.status === 401){
        const error = new Error(response.error);
        throw error;
    }
 
    }catch(err){ 
      console.log(err);
      navigate('/');
    }
  }

 
  useEffect(() => {
      dashboardPage();
  })
  const names = localStorage.getItem('names');
  return (
      <>
          <div className="alert alert-dismissible alert-info mx-5 mt-3">
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
              <h4 className="alert-heading">Warning! hi{names}</h4>
              <p className="mb-0">Your subscription ends on 25 April 2023</p>
          </div>
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
              <MDBCol md="6" sm="12">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/bJyxvx5D/full-stack-web-developer.png"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "23rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn Anular</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol md="6" sm="12">
                  <MDBCard>
                      <MDBCardImage
                          src="https://i.postimg.cc/x87MgW1M/tropy.jpg"
                          alt="..."
                          position="top"
                          style={{ maxWidth: "100%", height: "23rem" }}
                      />
                      <MDBCardBody>
                          <MDBCardText>Learn Anular</MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
          </MDBRow>

          <MDBRow className="mx-5 my-4">
              <MDBCard className="mx-2 alert-info">
                  <MDBTypography blockquote className="mb-0">
                      <div className="mx-1 mt-1">
                          <h3>Discussions</h3>
                      </div>
                      <MDBRow className="my-3">
                          <MDBCol ms="3" md="1">
                              <img src="https://i.postimg.cc/Kzj1VJVN/testBH.jpg" alt="" className="DiscImg" />
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
                              <img src="https://i.postimg.cc/dtP8kcgc/testH.png" alt="" className="DiscImg" />
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
                      <footer className="text-center footerptr mb-3">
                          <u>view more discussions</u>
                      </footer>
                  </MDBTypography>
              </MDBCard>
          </MDBRow>
      </>
  );
}

export default Dashboard          