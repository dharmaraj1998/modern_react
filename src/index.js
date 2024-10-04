import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return(
    <div>
      <h1>hi there</h1>
    </div>
  )
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

