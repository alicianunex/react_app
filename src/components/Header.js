import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">
            I'm going to use and APi with The Simpsons or Rick and Morty, not
            100% yet, let see how this goes
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
