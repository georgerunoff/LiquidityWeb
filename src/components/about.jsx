import React from "react";

export const About = (props) => {
    return (
      <div id="about" className="about-section">
         <div className="about-bg">
        <div className="container">
          <div className="row align-items-center"> {/* Add align-items-center here */}
            <div className="col-xs-12 col-md-6">
              <img src="img/liquidity-img1.png" className="img-responsive" alt="Toronto Skyline" /> {/* Add rounded-img class here */}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>Liquidity is a University of Toronto-based app startup that originated as a way for bar managers to get rid of deadweight stock.
                </p>
                <p>It’s no secret that the alcohol services industry is one of the last sectors to modernize and adopt the latest wave of technology, and at Liquidity, we fundamentally believe that this lack of advancement has only served to inconvenience both customers and establishments. 
                </p>
                <p>This is why we are dedicated to making sure that waiting in lines, waving down the bartender, and physically paying for your drink are concepts of the past.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
