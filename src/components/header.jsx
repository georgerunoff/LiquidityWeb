import React from "react";

export const Header = (props) => {

  const {isMobile, data} = props;
  return (
    <header id="header">
      <div className="intro">
        <div className="intro-bg"></div> {/* Background layer for the blur */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className={props.isMobile ? 'intro-mobile-h1': 'intro-h1'}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Download
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};