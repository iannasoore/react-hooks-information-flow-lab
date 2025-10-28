import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2>Shopping List</h2>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;