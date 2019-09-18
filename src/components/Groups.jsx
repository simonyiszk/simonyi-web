import React from "react";
import "./groups.css";
import Group from "./Group";
import data from "../data/groups";

export default function Groups() {
  return (
    <div className="groupsSectionContainer">
      <h1 className="groupsSectionTitle">Köreink</h1>
      <div className="groupsWrapper">
        {data.map(d => (
          <Group key={d.name} data={d} />
        ))}
      </div>
    </div>
  );
}
