import { Fragment } from "react";

import React from 'react'
import { Logo } from './Resources'

function Nav() {
  return (
    <nav class='navBar'>
      <div>
        <img src={Logo}></img>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;