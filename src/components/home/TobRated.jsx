import React from "react";
import "./style/recom.css";
import { Link } from "react-router-dom";

function TobRated() {
  return (
    <div className="rateContainer">

        
      <div className="recomendationBox">
      <h2 className='topRatedH' >Top Rated</h2>
        <figure class="snip1515">
          <div class="profile-image">
            <Link to='/barber-Profile/5'><img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
              alt="sample47"
            />
            </Link>
          </div>
          <figcaption>
            <h3>Fleece Marigold</h3>
            <h4>Founder</h4>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1515">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
              alt="sample47"
            />
          </div>
          <figcaption>
            <h3>Fleece Marigold</h3>
            <h4>Founder</h4>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1515">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
              alt="sample47"
            />
          </div>
          <figcaption>
            <h3>Fleece Marigold</h3>
            <h4>Founder</h4>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>

        <figure class="snip1515">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
              alt="sample47"
            />
          </div>
          <figcaption>
            <h3>Fleece Marigold</h3>
            <h4>Founder</h4>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>

        <figure class="snip1515">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
              alt="sample47"
            />
          </div>
          <figcaption>
            <h3>Fleece Marigold</h3>
            <h4>Founder</h4>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default TobRated;
