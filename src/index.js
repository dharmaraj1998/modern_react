import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const date = new Date();
  const name = "samantha";
  const age = 25;
  return(
    <div>
      <h1>{date.toLocaleDateString()} </h1>
      <p>{name} {age}</p>
    </div>
  )
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

