import React, { useState } from 'react';
import * as sc from './DropdownMenu.style';

const DropdownMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const showMenu = () => {
    setDisplayMenu(true);

    document.addEventListener('click', hideMenu);
  };

  const hideMenu = () => {
    setDisplayMenu(false);

    document.removeEventListener('click', hideMenu);
  };

  return (
    <sc.Dropdown>
      <sc.Button onClick={showMenu}>My Setting</sc.Button>

      {displayMenu && (
        <sc.Ul>
          <sc.Li onClick={() => alert('1')}>
            <p>1</p>
          </sc.Li>

          <sc.Li onClick={() => alert('2')}>
            <p>2</p>
          </sc.Li>

          <sc.Li onClick={() => alert('3')}>
            <p>3</p>
          </sc.Li>
        </sc.Ul>
      )}
    </sc.Dropdown>
  );
};

export default DropdownMenu;
