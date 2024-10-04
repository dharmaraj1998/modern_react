import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function App(){
//   const date = new Date();
//   const name = "samantha";
//   const age = 25;
//   return(
//     <div>
//       <h1>{date.toLocaleDateString()} </h1>
//       <p>{name} {age}</p>
//       <input type='number' min={5} max={5} style={{border : "2px solid red"}}/>
//       <textPath autoFocus/>
//     </div>
//   )
// }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

