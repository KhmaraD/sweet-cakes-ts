import React from 'react';
import style from './MainPage.module.scss';

export const MainPage: React.FC = () => {
  return (
    <div className={style.mainWrapper}>
      <h3>Привіт! Мене звати Лєна</h3>
      <h5>Я готую найсмачніші тортики та десерти для вашого свята 😘</h5>
      <p>Якщо Ви хочете замовити смачний і красивий торт, який стане чудовим доповненням до вашого свята - я завжди тут, для Вас ❤️</p>
    </div>
  );
};

