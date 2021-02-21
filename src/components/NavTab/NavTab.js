import React from 'react';
import './NavTab.css'

function NavTab(props) {
  return (
    <ul className={props.isShown ? 'navtab' : 'navtab navtab_none'}>
      <li ><a href="#AboutProject" onClick={props.handleClick} className={props.isShown ? 'navtab__item' : 'navtab__item navtab__item_none'}>
        О&nbsp;проекте</a></li>
      <li ><a href="#Techs" onClick={props.handleClick} className={props.isShown ? 'navtab__item' : 'navtab__item navtab__item_none'}>
        О&nbsp;технологиях</a></li>
      <li ><a href="#AboutMe" onClick={props.handleClick} className={props.isShown ? 'navtab__item' : 'navtab__item navtab__item_none'}>
        О&nbsp;студенте</a></li>
        <li ><a href="#Portfolio" onClick={props.handleClick} className={props.isShown ? 'navtab__item' : 'navtab__item navtab__item_none'}>
        Портфолио</a></li>
    </ul>
  );
}

export default NavTab;
