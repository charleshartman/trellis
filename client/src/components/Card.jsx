import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {card.labels.map((label) => {
            return (
              <div
                key={label}
                className={`card-label ${label.toLowerCase()} colorblindable`}
              ></div>
            );
          })}
          <p>{card.description}</p>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon overdue-recent completed">Aug 4</i>
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
