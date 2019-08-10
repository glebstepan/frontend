import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pageComponents/header.js';
import Menu from './pageComponents/menu.js';
import Footer from './pageComponents/footer.js';
import Banner from './pageComponents/banner.js';
import Content from './pageComponents/content.js';

let user = {
   name: 'Ivan',
   email: 'ivan@example.com'
};

function App() {
  return (
    <div className="App">
      <Header user={user}/>
      <Menu user={user}/>
      <Banner user={user}/>
      <Content user={user}/>
      <Footer user={user}/>
    </div>
  );
}

export default App;
