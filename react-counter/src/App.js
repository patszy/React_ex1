import React from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <Counter initValue={23}/>
    </div>
  );
}

export default App;
