// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const onClicButton = ()=>{alert()};
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClicButton}>ボタン</button>
    </>
  );
}

export default App;
