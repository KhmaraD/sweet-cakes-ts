import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo_cupcake.png';

export const Header: React.FC = () => {
  return (
    <header>
      <div className={style.logoWrapper}>
        <img className={style.logo} src={logo} alt="logo"/>
        {/*<img className={style.logoName} src={logoName} alt="logo Name"/>*/}
      </div>
      {/*<Navbar*/}
      {/*  links={links}*/}
      {/*  language={language}*/}
      {/*  setLang={setLang}*/}
      {/*/>*/}
    </header>
  );
};
