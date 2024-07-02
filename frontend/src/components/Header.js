import React, { useState } from 'eact';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchQuery}`);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li>
            <button onClick={handleMenuClick}>Menu</button>
            {menuOpen && (
              <ul>
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
                <li><a href="#">Submenu 3</a></li>
              </ul>
            )}
          </li>
          <li>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
              />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;