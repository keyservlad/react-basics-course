import React from "react";

const Header = (props) => {
  return (
    <header
      style={{
        background: props.background,
        padding: "15px",
        color: "white",
      }}
    >
      {props.children}
    </header>
  );
}

export default Header;
