import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) =>{

  return   <header className={s.header}>
  <img src="https://img.rg.ru/img/content/174/48/56/DB2019AL01916_large_d_850.jpg" />
  <div className={s.loginBlock}>

      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}


  </div>
           </header>
}

export default Header;
