import React from "react";

function Card(props) {
  const {
    name,
    designation,
    location,
    profilePic,
    instagram,
    github,
    linkedin,
    twitter,
  } = props;

  return (
    <div className="card-component">
      <div className="profile-image">
        <img src={profilePic} alt="profile_image" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <p>{location}</p>
        <div className="icons">
          <a aria-label="Twitter" href={twitter ? twitter : "#"}>
            <i className="ion-social-twitter"></i>
          </a>
          <a aria-label="Linkedin" href={linkedin ? linkedin : "#"}>
            <i className="ion-social-linkedin"></i>
          </a>
          <a aria-label="GitHub" href={github ? github : "#"}>
            <i className="ion-social-github"></i>
          </a>
          <a aria-label="Instagram" href={instagram ? instagram : "#"}>
            <i className="ion-social-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
