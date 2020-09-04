import React, {Component, Suspense} from 'react';
import './App.css';

const Panel = React.lazy(() => import('./components/Panel/Panel'));


const list = [
  {name: 'bmw', price: '12000'},
  // {name: 'reno', price: '5000'},
  // {name: 'audi', price: '15000'},
  // {name: 'reno', price: '5000'},
  // {name: 'reno', price: '5000'}
];

class App extends Component  {
  render() {
    console.dir(React)
    return (
      
       <Suspense fallback={<div>Loading...</div>}>
       <div>
       
       <Panel list={list}/>
       </div>
      </Suspense>
    )
  }

}

export default App;
