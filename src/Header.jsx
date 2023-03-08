import React, { useState } from 'react';
import InputData from './InputData';

function Header({ count, setcount }) {

  const [showWindow, setshowWindow] = useState(false);
  return (
    <>
      <div class="header">
        <div class="header_left">Employee Database Management</div>
        <div class="header_right"
          onClick={() => setshowWindow(true)}
        >
          Add Employee
        </div>
      </div>
      <div>{
        showWindow && (
          <InputData setshowWindow={setshowWindow} count={count} setcount={setcount} />
        )
      }

      </div>
    </>
  );
}

export default Header;