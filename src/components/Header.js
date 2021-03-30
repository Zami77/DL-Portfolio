import React from 'react';
import Scroll from './Scroll';
import Logo from '../assets/images/DEL-Logo.png';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>

        <img src={Logo} height="30%" width="30%"></img>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Begin
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
