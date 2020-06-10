import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <span className = 'text-warning'><h1>FindMyEvents</h1></span>
              <h4 className ="lead">View and Promote your Events here </h4>
              <br />

              <ul className="list-unstyled"></ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Explore</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">
                    <i class="fab fa-facebook-square"></i>{" "}Find my events
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fab fa-linkedin "></i>
                    {" "}Find My Events
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fab fa-instagram"></i>{" "}find_my_events_
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="nav-link text-white lead ">
                <i class="fas fa-map-marker-alt"></i>
                &nbsp; Lucknow, India &nbsp;
              </h6>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center lead">
              &copy;{new Date().getFullYear()} FindMyEvents -All Rights Reserved<br></br>
              Designed by <span className = 'text-warning'>Utkarsh Rathore</span>.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;
const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
