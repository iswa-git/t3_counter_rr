import React from 'react';
import { Counter } from './features/counter/Counter';
//import './App.css';
import './counter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <header className="countertext" >
        <h2>تسابيح</h2>
        <div className='row'>
          <Counter tesbih="hello"/>
          <Counter tesbih="baby" />
          <Counter tesbih="again" />
        </div>
      </header>
    </div>
  );
}

export default App;