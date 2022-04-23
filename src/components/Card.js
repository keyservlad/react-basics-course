import React from "react";


const Card = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img alt="" src={props.userData.imageUrl}/>
      </div>
      <div className="content">
        <a href="/" className="header">{props.userData.fullName}</a>
        <div className="meta">
          <span className="date">Joined in {props.userData.joinedYear}</span>
        </div>
        <div className="description">
        {props.userData.description}
        </div>
      </div>
      <div className="extra content">
        <a href="/">
          <i className="user icon" />
          {props.userData.totalFriends} Friends
        </a>
      </div>
    </div>
  );
};

export default Card;
