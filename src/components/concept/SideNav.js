import React from "react";

const SideNav = ({ links, active, onClick }) => {
  return (
    <div className="sideNav">
      {links.map((link, i) => (
        <div
          key={link.key}
          className={active === i ? "link active" : "link"}
          onClick={() => onClick(i)}
        >
          {link.header}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
