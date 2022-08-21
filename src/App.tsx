import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./components/MainPage/MainPage";
import {Navbar} from "./components/Header/Navbar/Navbar";

export const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}
