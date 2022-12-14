import React from "react";
import { FaAudible } from "react-icons/fa";

function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todolist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaAudible />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
