import React from "react";
import "./group.css";

export default function Group(props) {
  return (
    <div className="group__container">
      <div className="group__mainContainer">
        <div className="groupImage__container">
          <img
            src={`./resources/groups/${props.data.logoname}.svg`}
            alt={props.data.name}
          />
        </div>
        <div className="groupDetails__container">
          <div className="groupDetails__name">{props.data.name}</div>
          <div className="groupDetails__desc">{props.data.description}</div>
        </div>
      </div>

      <div className="groupSocial__container">
        {props.data.socialmedia &&
          props.data.socialmedia.map(s => (
            <div key={s.link} className="groupSocial__contact">
              <div className="groupSocial__imageContainer">
                <img src={`./resources/social/${s.type}.svg`} alt={s.link} />
              </div>
              <div className="groupSocial__text">
                {s.display ? s.display : s.link}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
