import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
const Sidebar = () => {
  const [activeLink] = useState(1);

  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.gear} alt="profile image" />
        </div>
        <span className="info-name">{navigationLinks[0].title}</span>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <div className="navigation">
          <ul className="nav-list">
            {navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a
                  href="#"
                  className={`nav-link ${
                    navigationLink.id === activeLink ? "active" : null
                  }`}
                >
                  <img src={navigationLink.image} alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="user-info text-white" style={{ marginBottom: "90px" }}>
          <div className="user-info">
            <div className="info-img img-fit-cover">
              <img src={personsImgs.person_one} alt="profile image" />
            </div>
            <span className="info-name">Shahrukh </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
