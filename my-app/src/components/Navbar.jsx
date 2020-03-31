import React from 'react';
import s from './Navbar.module.css';


const Navbar = () =>{

  return  <nav className={s.nav}>
    <div class={s.item}><a>Profile</a></div>
    <div class={s.item}><a>Messages</a></div>
    <div class={s.item}><a>News</a></div>
    <div class={s.item}><a>Music</a></div>
    <div class={s.item}><a>Settings</a></div>
  </nav>
}

export default Navbar;
